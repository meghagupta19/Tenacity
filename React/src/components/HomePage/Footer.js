import React from "react";
import './Footer.css'

function Footer() {
  return (
    <div>
      <div className="footer">
      <div className="container foot">
        <div className="row">
          <a href="/" className="footer-logo">
            <img
              src="https://www.nitj.ac.in/prayaas/New%20folder/prayaas%20logo.png"
              className="footer-img"
              alt="logo"
            />
          </a>
          <p className="footer-text">
            Prayaas is a non-profit organisation that is working for the
            education of underprivileged children in disaster struck areas,
            providing skill training and livelihood programs for the deprived
            communities. ”
          </p>
        </div>

        <div className="container footer-contain">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 footer-col">
              <ul className="footer-list">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/About">About</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-3  col-sm-3 col-xs-3 footer-col">
              <ul className="footer-list">
                <li>
                  <a href="https://medium.com/codechef-nitj">Impacts</a>
                </li>
                <li>
                  <a href="/Causes">Causes</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-3  col-sm-3 col-xs-3 footer-col">
              <ul className="footer-list">
                <li>
                  <a href="/Contacts">Contacts</a>
                </li>
                <li>
                  <a href="/">Volunteer</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 footer-col">
              <ul className="footer-list">
                <li>
                  <a href="/">Donor</a>
                </li>
                <li>
                  <a href="#toast" id="toast">
                    App
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="footer-hr"/>

        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-6 legend">
              <p className="copyright">
                &#169; Copyright 2021 | Prayaas | All rights reserved.{" "}
              </p>
            </div>
            <div className="col-lg-4 col-md-6 ">
              <ul className="social">
                <li>
                  <a
                    href="https://www.facebook.com/prayaasnitj"
                    //target="_blank"
                  >
                    <i className="fab fa-facebook-f footer-icon"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/prayaas_nitj?igshid=31dqnfjtd0r4"
                    //target="_blank"
                  >
                    <i className="fab fa-instagram footer-icon"></i>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.linkedin.com/company/prayaas-nitj/"
                    //target="_blank"
                  >
                    <i className="fab fa-linkedin-in footer-icon"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Footer;
