import React, { useState, useEffect } from "react";
import "./Topbar.css";
import { Link } from "react-router-dom";
import {
  FaAngleDoubleUp,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoIosMail, IoIosMenu } from "react-icons/io";
import Sanjay from "../../Assets/sanjay.png";

const Topbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [isVisible, setIsVisible] = useState(false);

  // Toggle navbar visibility on small screens
  const handleShowNavbar = () => setShowNavbar(!showNavbar);

  // Set active link and close navbar on link click
  const handleChange = (link) => {
    setActiveLink(link);
    setShowNavbar(false); // Close navbar on link click
  };

  // Close navbar if clicked outside of it
  const handleClickOutside = (e) => {
    if (!e.target.closest(".navsection") && showNavbar) {
      setShowNavbar(false);
    }
  };

  // Close navbar on scroll
  const handleScroll = () => {
    if (showNavbar) {
      setShowNavbar(false); // Close navbar on scroll
    }
  };

  // Toggle navbar fixed position when scrolling past a specific point
  const toggleNavBg = () => {
    setScrolled(window.scrollY > 100); // Adjust offset as needed
  };

  // Show "scroll to top" button after a certain scroll distance
  const toggleVisibility = () => {
    setIsVisible(window.pageYOffset > 500);
  };

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    window.addEventListener("scroll", handleScroll); // Add scroll listener for closing navbar on scroll
    window.addEventListener("scroll", toggleNavBg); // Add scroll listener for changing navbar background
    window.addEventListener("scroll", toggleVisibility); // Add scroll listener for scroll to top button

    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", toggleNavBg);
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, [showNavbar]);

  return (
    <>
      <a
        href="https://api.whatsapp.com/send?phone=9983693560"
        target="_blank"
        className="whatsapp_float"
      >
        <FaWhatsapp className="whatsapp-icon" />
      </a>

      <a href="tel:+919983693560" className="call_float">
        <FaPhone />
      </a>

      <div className="scroll-to-top">
        {isVisible && (
          <button onClick={scrollToTop} className="go-to-top-btn">
            <FaAngleDoubleUp />
          </button>
        )}
      </div>

      <div>
        <section>
          <div className="container-fluid headerbg">
            <div className="container">
              <div className="row">
                <div className="barinfo">
                  <div className="barlocation">
                    <FaLocationDot className="location" />

                    <a
                      href="https://maps.app.goo.gl/8aCnhwTspwBCc9La7"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h3>
                        Mukharji Nagar, Circular Rd, U.I.T Colony, Bharatpur, Raj-321001
                      </h3>
                    </a>

                  </div>
                  <div>
                    <img style={{ width: '55px', height: '55px', borderRadius: '50px', marginRight: 100, marginLeft: 100 }} src={Sanjay} alt="sanjay" />
                  </div>


                  <div className="barnumber">
                    <FaPhone className="call" />
                    <h3>
                      <a href="tel:+919983693560">
                        9983693560
                      </a>
                    </h3>

                  </div>
                  <div className="barmail">
                    <IoIosMail className="mail" />
                    <div className="mail-set">
                      <div>
                        <h3>
                          <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=www.brajesh9983693560@gmail.com"
                            target="_blank"
                          >
                            www.brajesh9983693560@gmail.com
                          </a>

                        </h3>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {isVisible && (
            <button onClick={scrollToTop} className="scrollToTop">
              Scroll to Top
            </button>
          )}
        </section>

      </div>
    </>
  );
};

export default Topbar;



