//Basic Node modules 
const express = require("express");
const https = require('https');
const bodyParser = require("body-parser");
const ejs = require("ejs");

// Modules for payment gateway
const qs = require("querystring");
const checksum_lib = require('./Paytm/checksum');
const config = require("./Paytm/config");

//Modules for database
const mongoose = require("mongoose");

//Module for sending emails
// var sendgrid = require("sendgrid");
// var router = express.Router("Yukt",process.env.API_KEY);
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const app = express();

//Connecting Body Parser and ejs
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine",'ejs');

//Connecting CSS
app.use(express.static("public"));

//Connecting mongoose
mongoose.connect('mongodb://localhost:27017/disasterDB', {useNewUrlParser: true, useUnifiedTopology: true});

//////////////////////////// Database//////////////////////////////////////////////

//Create Schema
const kind_donorSchema = new mongoose.Schema({
    
    name    : String,
    email   : String,
    phone   : Number,
    address : String,
    goods   : String
})

//Create model
const Kind_donor = mongoose.model("Kind_donor",kind_donorSchema);

////////////////////////////Routes//////////////////////////////////////////////

app.get("/",function(req,res){
   res.sendFile(__dirname + "/index.html");
})

app.get("/impacts",function(req,res){
    res.sendFile(__dirname + "/Impact.html");
})

app.get("/causes",function(req,res){
    res.sendFile(__dirname + "/causes.html");
})

app.get("/donate_in_cash",function(req,res){
    res.sendFile(__dirname + "/donate_in_cash.html");
})

app.get("/donate_in_kind",function(req,res){
    res.sendFile(__dirname + "/donate_in_kind.html");
})

app.post("/thankyou",function(req,res){
    
    //Retrieving Data from Donate_in_kind form
    //Create object in database
    const new_kind_donor = new Kind_donor({
    
        name    : req.body.dk_name,
        email   : req.body.dk_email,
        phone   : req.body.dk_phone,
        address : req.body.dk_address,
        goods   : req.body.dk_goods
    })
   
    new_kind_donor.save();

    var mail_content = "Dear "+ req.body.dk_name + "Thank you very much for your kind step for Raahat. This humble root can have a major impact on the victims by providing them with life-saving amenities. Our team will  soon collect the goods from you. Regards : Team Raahat" 

    

    const msg = {
        to: req.body.dk_email, // Change to your recipient
        from: 'k.yukt.07@gmail.com', // Change to your verified sender
        subject: 'Thankyou for your Donation',
        text: 'Dear' + req.body.dk_email + 'Thank you very much for your recent donation on Raahat. As you now know, this humble root can have a major impact on the victims by providing them with life-saving amenities. We will soon be sending a volunteer to collect the items at the mentioned address.',
        html: '<div><p>'+mail_content+'</p></div>',
        
     }
    sgMail.send(msg).then(() => {
        console.log('Email sent')
    })
    .catch((error) => {
        console.error(error)
    })

    res.render( "thankyou" , {donorName : req.body.dk_name});
})

var port = process.env.PORT || 3000;

app.listen( port , function(){
    console.log("App is running at port "+ port );
})


const parseURL  = express.urlencoded({extended:false});
const parseJSON = express.json({extended:false}); 

app.post("/paynow", [parseURL, parseJSON], (req, res) => {
    // Route for making payment
  
    var paymentDetails = {
      amount: req.body.amount,
      customerId: req.body.name,
      customerEmail: req.body.email,
      customerPhone: req.body.phone
  }
  if(!paymentDetails.amount || !paymentDetails.customerId || !paymentDetails.customerEmail || !paymentDetails.customerPhone) {
      res.status(400).send('Payment failed')
  } else {
      var params = {};
      params['MID'] = "TaYuBb99934306879481";
      params['WEBSITE'] = config.PaytmConfig.website;
      params['CHANNEL_ID'] = 'WEB';
      params['INDUSTRY_TYPE_ID'] = 'Retail';
      params['ORDER_ID'] = 'TEST_'  + new Date().getTime();
      params['CUST_ID'] = paymentDetails.customerId;
      params['TXN_AMOUNT'] = paymentDetails.amount;
      params['CALLBACK_URL'] = 'http://localhost:3000/callback';
      params['EMAIL'] = paymentDetails.customerEmail;
      params['MOBILE_NO'] = paymentDetails.customerPhone;
  
  
      checksum_lib.genchecksum(params, config.PaytmConfig.key, function (err, checksum) {
          var txn_url = "https://securegw-stage.paytm.in/theia/processTransaction"; // for staging
          // var txn_url = "https://securegw.paytm.in/theia/processTransaction"; // for production
  
          var form_fields = "";
          for (var x in params) {
              form_fields += "<input type='hidden' name='" + x + "' value='" + params[x] + "' >";
          }
          form_fields += "<input type='hidden' name='CHECKSUMHASH' value='" + checksum + "' >";
  
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.write('<html><head><title>Merchant Checkout Page</title></head><body><center><h1>Please do not refresh this page...</h1></center><form method="post" action="' + txn_url + '" name="f1">' + form_fields + '</form><script type="text/javascript">document.f1.submit();</script></body></html>');
          res.end();
      });
  }
  });

  app.post("/callback", (req, res) => {
    // Route for verifiying payment
  
    var body = '';
  
    req.on('data', function (data) {
       body += data;
    });
  
     req.on('end', function () {
       var html = "";
       var post_data = qs.parse(body);
  
       // received params in callback
       console.log('Callback Response: ', post_data, "\n");
  
  
       // verify the checksum
       var checksumhash = post_data.CHECKSUMHASH;
       // delete post_data.CHECKSUMHASH;
       var result = checksum_lib.verifychecksum(post_data, config.PaytmConfig.key, checksumhash);
       console.log("Checksum Result => ", result, "\n");
  
  
       // Send Server-to-Server request to verify Order Status
       var params = {"MID": config.PaytmConfig.mid, "ORDERID": post_data.ORDERID};
  
       checksum_lib.genchecksum(params, config.PaytmConfig.key, function (err, checksum) {
  
         params.CHECKSUMHASH = checksum;
         post_data = 'JsonData='+JSON.stringify(params);
  
         var options = {
           hostname: 'securegw-stage.paytm.in', // for staging
           // hostname: 'securegw.paytm.in', // for production
           port: 443,
           path: '/merchant-status/getTxnStatus',
           method: 'POST',
           headers: {
             'Content-Type': 'application/x-www-form-urlencoded',
             'Content-Length': post_data.length
           }
         };
  
  
         // Set up the request
         var response = "";
         var post_req = https.request(options, function(post_res) {
           post_res.on('data', function (chunk) {
             response += chunk;
           });
  
           post_res.on('end', function(){
             console.log('S2S Response: ', response, "\n");
  
             var _result = JSON.parse(response);
               if(_result.STATUS == 'TXN_SUCCESS') {
                   res.send('payment sucess')
               }else {
                   res.send('payment failed')
               }
             });
         });
  
         // post the data
         post_req.write(post_data);
         post_req.end();
        });
       });
  });



















// It means that ./routes.js module exports a function which is imported as paytm_func
//It is calling that function immediately and passing in app
//var paytm_func = require('./routes.js');
//paytm_func(app);
//require('./routes')(app);








