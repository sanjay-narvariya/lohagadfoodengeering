import React, { useEffect, useState , useRef} from "react";
import "./Home.css";
import {
  FaSearch,
  FaBalanceScale,
  FaClipboardList,
  FaCheckCircle,
} from "react-icons/fa";
import Section1 from "../../Components/Homesection1/Section1";
import Contactus from "../../Components/Homesection1/Contactus";
import Section2 from "../../Components/Homesection1/Section2";
import Countsection from "../../Components/CountSection/Countsection";
import Equipment from "../../Components/RentalEquiment/Equipment";
import Brandslide from "../../Components/Brand/Brandslide";
import { Link } from "react-router-dom";

const Home = () => {

  const triggerRef = useRef(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const [active, setActive] = useState(false);

  const handleActiveChange = () => {
    setActive(!active);
  };

  return (
    <>
      <section  ref={triggerRef}>
        <div className="container-fluid">
          <div className="row">
            <div className="homebanner">
              <div className="overlay"></div>
              <div className="bannertext">
                <h1>
                  Taste Your Dream with{" "}
                  <span style={{ color: "#ef5777", fontWeight: "bold" }}>
                    Lohagad Food Engineering
                  </span>{" "}
                  Tea and Delicious, Tasty Patties
                </h1>

                <p>
                  Lohagad Food Engineering provides high-quality and flavorful products to bring your vision to life
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

     
      <section>
        <Section1 triggerRef={triggerRef} />
      </section>


      <section >
        <Equipment />
      </section>


      <section>
        <Contactus />
      </section>


      <section className="bgcolor">
        <div className="container">
          <div className="row">
            <div className="rentalinfo">
              <div className="steps-heading">
                <h2> Problems & Opportunity</h2>
                <h1>Get Your Service in Easy 4 Steps</h1>
                <p>
                In the pursuit of delicious food, people’s attention is increasingly shifting towards the cuisine of Western civilization. As a result, the fame of local food remains limited to specific regions. We are providing pure, fresh, and delicious breakfasts to promote the diverse flavors of local cuisine on a global scale, helping people access healthy and fresh food options. 
                </p>
              </div>

              <div className="row  rentalcard">
                {/* Step 1 */}
                <div className="col-6 col-md-3 mb-4">
                  <div className="step-card">
                    <div className="icon-container">
                      <FaSearch size={24} className="icon" />
                    </div>
                    <h3 className="step-number">01</h3>
                    <h5 className="step-title">Search Your Demand</h5>
                  </div>
                </div>
                {/* Step 2 */}
                <div className="col-6 col-md-3 mb-4">
                  <div className="step-card">
                    <div className="icon-container">
                      <FaBalanceScale size={24} className="icon" />
                    </div>
                    <h3 className="step-number">02</h3>
                    <h5 className="step-title">Compare Your Selection</h5>
                  </div>
                </div>
                {/* Step 3 */}
                <div className="col-6 col-md-3 mb-4">
                  <div className="step-card">
                    <div className="icon-container">
                      <FaClipboardList size={24} className="icon" />
                    </div>
                    <h3 className="step-number">03</h3>
                    <h5 className="step-title">Reserve Our Service</h5>
                  </div>
                </div>
                {/* Step 4 */}
                <div className="col-6 col-md-3 mb-4">
                  <div className="step-card">
                    <div className="icon-container">
                      <FaCheckCircle size={24} className="icon" />
                    </div>
                    <h3 className="step-number">04</h3>
                    <h5 className="step-title">Get Start Your Taste</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Section2 />
      </section>

      {/* <section>
        <Countsection />
      </section> */}


     {/* <section>
        <Boost />
      </section>  */}

      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="Quotebg">
              <div className="overlay2"></div>
              <div className="container">
                <div className="Quote-data">
                  <h1>We Are Served Since 2023 To Clients With Trust</h1>
                  <p>
                  "For years, clients have trusted us to deliver excellence and unwavering reliability in every service."
                  </p>
                  <button>
                    <Link to="/Contactus" onClick={handleActiveChange}>
                      Get A Quote
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Brandslide />
      </section>
    </>
  );
};

export default Home;
