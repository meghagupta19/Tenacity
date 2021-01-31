const checksumLib = require("./Paytm/checksum");
// A checksum is a string of numbers and letters that acts as a fingerprint for a file
// against which comparisons can be made later to detect errors in the data
// They are important because we use them to check file for integrity (Authentication purposes)

const port = process.env.PORT || 3000;

var today = new Date();

module.export = function(app){
    app.get("./payment",function(req,res){
        let params = {};
            
        params['MID']              = "TaYuBb99934306879481",
        params['WEBSITE']          = "WEBSTAGING",
        params['CHANNEL_ID']       = "WEB",
        params["INDUSTRY_TYPE_ID"] = "Retail",
        //params["ORDER_ID"]       = "ORDER_ID_0001",
        //params["CUSTOMER_ID"]    = "CUST_ID_0001",
        params["ORDER_ID"]         = "ORD"+today.getDate()+today.getHours()+today.getMinutes()+today.getSeconds(),
        params["CUSTOMER_ID"]      = "CUS"+today.getDate()+today.getHours()+today.getMinutes()+today.getSeconds(),
        params["TXN_AMOUNT"]       = "1",
        params["CALLBACK_URL"]     = "http://localhost:"+port+"/callback",
        params["EMAIL"]            = "k.yukt.07@gmail.com",
        params["MOBILE_NO"]        = "9915008166"


        checksumLib.genchecksum(params,"CgZfIojFtOlS8%ve",function(err,checksum){
            let txn_url = "https://securegw-stage.paytm.in/order/process";
            let formFields= "";
            for(x in params){
                formFields += "<input type='hidden' name='"+x+"' value='"+params[x]+"'/>"
            }

            formFields += "<input type='hidden' name='CHECKSUMHASH' value='"+checksum+"'>"

            var html = '<html><body><center> Donating for a good cause. Transaction in process</center><form method="post" action="'+txn_url+'" name="paymentForm">'+formFields+'</form><script type="text/javascript">document.paymentForm.submit()</script></body></html>'
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(html);
            res.end();
        })
    })
}