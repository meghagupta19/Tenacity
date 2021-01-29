import React from "react";

import "./Home.css";
import Header from './Header'
import Footer from './Footer'
import Images from './Images'
import Quotes from './Quotes'
import DonateNow from './DonateNow'
import VolunteerNow from './VolunteerNow'
import MiddleContainer from './MiddleContainer'


function Home() {
  return (
    <div>
      
      <div> <Header/> </div>     

      <div className="section">
        <Quotes/>
        <Images/>
        <MiddleContainer/>
        <DonateNow/>
        <VolunteerNow/>
      </div>

      <div className="footer">
        <Footer/>
      </div>
    </div>
    
  );
}

export default Home;
