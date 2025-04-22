import React from "react";
import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaPhoneAlt,
} from "react-icons/fa";
import { IoLocation, IoMail } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container-fluid">

          <div className="row">
            <div className="footerdata">
              <div className="col-md-4">
                <div className="leftdata">
                  <div className="websitename">
                    <Link to="/">
                      <h2>Lohagad Food Engineering Shop</h2>
                      <h4>(Mr. Brajesh Singh)</h4>
                    </Link>
                    <p>
                      Brajesh Ki Chai – 2022 Se Apka Bharosa, Swad Aur Yaari Ka Saathi.
                    </p>
                  </div>
                  <div className="socialicon">
                    <h3>Follow Us</h3>
                    <div className="iconlink">
                      <a href="#" target="#" rel="noopener noreferrer">
                        <FaInstagram className="innericon" />
                      </a>
                      <a href="#" target="#" rel="noopener noreferrer">
                        <FaFacebookF className="innericon" />
                      </a>
                      <a href="#" target="#" rel="noopener noreferrer">
                        <FaTwitter className="innericon" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="middle-data">
                  <div className="useful-links">
                    <h3>Useful Links</h3>
                    <ul>
                      <li className="footer-page-link">
                        <Link to="/">Home</Link>
                      </li>
                      <li className="footer-page-link">
                        <Link to="/Aboutus">About</Link>
                      </li>
                      <li className="footer-page-link">
                        <Link to="/Equipmentspage">Category</Link>
                      </li>
                      <li className="footer-page-link">
                        <Link to="/Payment">Payment</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="right-data">
                  <div className="contact-info">
                    <h3>Contact Us</h3>
                    <div className="contact-info-inner">
                      <div className="mail-info">
                        <IoMail className="icon" />
                        <div className="mail">
                          <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=www.brajesh9983693560@gmail.com"
                            target="_blank"
                          >
                            www.brajesh9983693560@gmail.com
                          </a>
                        </div>
                      </div>
                      <div className="mail-info">
                        <FaPhoneAlt className="icon" />
                        <div className="phone">
                          <a href="tel:+919983693560">
                            9983693560
                          </a>
                        </div>
                      </div>
                      <div className="mail-info">
                        <IoLocation className="icon" />
                        <a
                          href="https://maps.app.goo.gl/8aCnhwTspwBCc9La7"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          
                            Mukharji Nagar, Circular Rd, U.I.T Colony, Bharatpur, Raj-321001
                          
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid" >
          <div className="row">
            <div style={{background: 'hwb(0 37% 33% / 0.532)', display:'flex', justifyContent:'center', alignItems:'center'}}>
              <p>
                All Right Reserved &#169; {new Date().getFullYear()}{" "}
                <Link to={`/`} className="Linkcss">
                  <b>Lohagad Food Engineering</b>
                </Link>{" "}
                Design by{" "}
                <Link
                  to={
                    "https://www.linkedin.com/in/sanjay-narvaria-58987033b/"
                  }
                  className="Linkcss"
                >
                  <b>Sanjay Narvariya.</b>
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
