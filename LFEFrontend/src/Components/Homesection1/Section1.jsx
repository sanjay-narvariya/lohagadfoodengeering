import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import "./Section1.css";

const Section1 = ({ triggerRef }) => {
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [showSection, setShowSection] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path === "/") setActiveLink("Home");
    else if (path === "/Aboutus") setActiveLink("Aboutus");
    else if (path === "/Equipmentspage") setActiveLink("Equipmentspage");
    else if (path === "/Payment") setActiveLink("Payment");
  }, [location.pathname]);

  const handleShowNavbar = () => setShowNavbar(!showNavbar);

  const handleChange = (link) => {
    setActiveLink(link);
    setShowNavbar(false);
  };

  const handleClickOutside = (e) => {
    if (!e.target.closest(".navsection") && showNavbar) {
      setShowNavbar(false);
    }
  };

  const handleScroll = () => {
    if (showNavbar) setShowNavbar(false);
    setScrolled(window.scrollY > 100);

    if (triggerRef?.current) {
      const triggerBottom = triggerRef.current.offsetTop + triggerRef.current.offsetHeight;
      const currentScroll = window.scrollY;
      setShowSection(currentScroll > triggerBottom);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    window.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showNavbar, triggerRef]);

  if (!showSection) return null;

  return (
    <section>
      <nav>
        <div className={`container-fluid ${scrolled ? "navbg" : "barbg"}`}>
          {/* Branding */}
          <div className="branding-bar">
            <h1>Lohagad Food Engineering</h1>
            <h4>(Mr. Brajesh Singh)</h4>
          </div>

          {/* Nav Section */}
          <div className="navsection" >
            <div className="menu-icon" onClick={handleShowNavbar}>
              <IoIosMenu />
            </div>
           
            <div className={`navlinks ${showNavbar ? "active" : ""}`}  style={showNavbar ? {} : {marginLeft:'200px',height:'65px'}}>
              <ul className="link">
                <li className={activeLink === "Home" ? "active" : ""}>
                  <Link to="/" onClick={() => handleChange("Home")}>Home</Link>
                </li>
                <li className={activeLink === "Aboutus" ? "active" : ""}>
                  <Link to="/Aboutus" onClick={() => handleChange("Aboutus")}>About</Link>
                </li>
                <li className={activeLink === "Equipmentspage" ? "active" : ""}>
                  <Link to="/Equipmentspage" onClick={() => handleChange("Equipmentspage")}>Category</Link>
                </li>
                <li className={activeLink === "Payment" ? "active" : ""}>
                  <Link to="/Payment" onClick={() => handleChange("Payment")}>Payment</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Section1;
