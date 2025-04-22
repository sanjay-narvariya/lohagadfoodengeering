import React, { useEffect } from "react";
import "./Section2.css";
import Truck from "../../Assets/brajeshsingh.jpg";
import Truck1 from "../../Assets/sanjay12.png";
import { FaLuggageCart, FaCogs, FaTools } from "react-icons/fa";
import AOS from "aos";

const Section2 = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section>
        <div className="container-fluid" style={{ margin: '20px' }}>
          <div className="row">
            <div className="col-md-6">
              <div className="section1img" style={{ marginTop: '50px' }}>
                <img
                  src={Truck}
                  alt="Truck"
                  data-aos="fade-right"
                  data-aos-duration="3000"
                  style={{borderRadius:"200px"}}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="section2info">
                <div className="section2title">
                  <h4>WHAT WE OFFER</h4>
                  <h1>
                  Swad, <span style={{color:'#ffbe76'}}>Garmahat</span> aur Yaari ka Tandoori Garam Tadka! 
                  </h1>
                  <p>
                    Brajesh Bhai par sirf chai nahi milti—yahaan milta hai har ghoont mein sukoon, har samose mein crispiness, aur har patties mein ghar jaisa swaad. Subah ki taazgi ho ya shaam ki thakaan, humare haath ki chai aur snacks banaayein har pal ko khaas. Saaf-suthra, tasty aur dil se—kyunki yahaan sirf nashta nahi, rishta banta hai!
                    स्वाद और सेहत के शौकीनों के लिए, हम लाए हैं भारत के हर कोने का रंग-बिरंगा स्वाद — हर नाश्ता, एक नई रसोई की कहानी!
                          <div style={{color:'red', fontSize:'1.5rem'}}>Mohalle ki yaari, Brajesh ki chai sab pe bhaari ! 😄!</div>
                  </p>
                </div>
                <div className="section2list" style={{marginTop:'140px'}}>
                  <div className="section2img">
                    <img
                      src={Truck1}
                      alt="Truck1"
                      data-aos="fade-left"
                      data-aos-duration="3000"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Section2;
