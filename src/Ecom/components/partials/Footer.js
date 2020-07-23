import React from 'react';
import './css/Footer.css';

export default class FooterEcom extends React.PureComponent {  
  render() {
    return(
      <footer>
        <section className="nb-footer">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div className="footer-single">˙
                  <div className="dummy-logo">
                    <div className="icon pull-left brand">
                      <i className="fa fa-copy"></i>
                    </div>
                    <h2>Lorem Ipsum</h2>
                    <p>Another responsive footer</p>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus felis diam, vulputate in risus eu, porttitor condimentum purus. Phasellus ullamcorper, odio id feugiat bibendum.</p>
                  <a href="" className="btn btn-footer">Read More</a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="footer-single useful-links">
                  <div className="footer-title"><h2>Navigation</h2></div>
                  <ul className="list-unstyled">
                    <li><a href="index.html">Home <i className="fa fa-angle-right pull-right"></i></a></li>
                    <li><a href="about1.html">About Us <i className="fa fa-angle-right pull-right"></i></a></li>
                    <li><a href="service1.html">Services <i className="fa fa-angle-right pull-right"></i></a></li>
                    <li><a href="portfolio1.html">Portfolio <i className="fa fa-angle-right pull-right"></i></a></li>
                    <li><a href="pricing.html">Pricing <i className="fa fa-angle-right pull-right"></i></a></li>
                    <li><a href="contact1.html">Contact Us <i className="fa fa-angle-right pull-right"></i></a></li>
                  </ul>
                </div>
              </div>
              <div className="clearfix visible-sm"></div>
              <div className="col-md-3 col-sm-6">
                <div className="col-sm-12 left-clear right-clear footer-single footer-project">
                  <div className="footer-title"><h2>Latest Projects</h2></div>
                  <div className="col-xs-4">
                    <img src="http://lorempixel.com/200/200/" className="img-responsive center-block"/>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="footer-single">
                  <div className="footer-title"><h2>Contact Information</h2></div>
                  <address>
                    999, Holly Eiusmod Tempor, City<br/>
                    Your State, Country <br/>
                    <i className="fa fa-phone"></i>  987 654 3210 <br/>
                    <i className="fa fa-fax"></i> 012 123 2345<br/>
                    <i className="fa fa-envelope"></i> info@example.com<br/>
                  </address>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="nb-copyright">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 copyrt xs-center">
                2015 © All Rights Reserved. <a href="">Terms & Conditions</a> | <a href="">Privacy Policy</a>
              </div>
              <div className="col-sm-6 text-right xs-center">
                <ul className="list-inline footer-social">
                  <li><a href=""><i className="fa fa-facebook"></i></a></li>
                  <li><a href=""><i className="fa fa-twitter"></i></a></li>
                  <li><a href=""><i className="fa fa-youtube-play"></i></a></li>
                  <li><a href=""><i className="fa fa-google-plus"></i></a></li>
                  <li><a href=""><i className="fa fa-skype"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
			</footer>
    );
  }
}