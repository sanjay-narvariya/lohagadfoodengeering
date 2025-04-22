import React, { useEffect, useRef } from "react";
import "./Aboutus.css";
import testimonial1 from "../../Assets/person2.jpg";
import testimonial2 from "../../Assets/person3.jpg";
import Founder1 from "../../Assets/person1.png";
import Brandslide from "../../Components/Brand/Brandslide";
import Section1 from "../../Components/Homesection1/Section1";

const Aboutus = () => {
  const triggerRef = useRef(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const teamMembers = [
    {
      name: "Mr. Rahul Singh",
      role: "Creative & Marketing Lead",
      image: testimonial1,
    },
    {
      name: "Mr. Sanjay Narvariya",
      role: "Digital & Social Media Marketing lead",
      image: testimonial2,
    }
  ];

  const copartner = [
    {
      name: "Brajesh Singh",
      role: "Founder of Lohagad Food Engineering",
      des: "Brajesh Singh is the visionary who laid the foundation of Lohagad Food Engineering With his extensive knowledge and experience in Those who are fond of quality delicious breakfast food @ taste, he has built the company from the ground up, offering reliable solutions for diverse food processing needs.",
      image: Founder1,
    }
  ];

  return (
    <>
      <section ref={triggerRef}>
        <div className="container-fluid">
          <div className="row">
            <div className="hero">
              <h1>ABOUT US</h1>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Section1 triggerRef={triggerRef} />
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="aboutinfo">
              <div className="abouttitle">

                <h1>
                  Welcome to <span>Lohagad Food Engineering</span>
                  (☕ Brajesh Ki Chai | Desi Breakfasts 🍳
                  Taste that feels like home. Powered by Lohagad Food Engineering.
                  📍 Made with Love, Served with Trust 💛)
                </h1>
                <p>
                  Lohagad Food Engineering – The Story Behind Brajesh Ki Chai & Delicious Breakfasts
                  Lohagad Food Engineering has now expanded its legacy of excellence and commitment to quality into the food processing and hospitality sectors. At the heart of this bold initiative is Brajesh Singh, a visionary whose dream was to deliver delicious, healthy, and affordable breakfast to every household — a dream that gave rise to “Brajesh Ki Chai” and premium breakfast services.
                  With a blend of modern technology, authentic flavors, and customer-centric values, Brajesh Singh has transformed Lohagad Food Engineering into not just a name, but a trusted brand in the food industry.
                </p>
                <p>
                  <u>Our Specialties: </u>
                  ✔️ Fresh and nutritious breakfast options

                  ✔️ Desi-style “Brajesh Ki Chai” that warms the heart

                  ✔️ Zero compromise on hygiene and quality

                  ✔️ A perfect blend of local taste and global standards

                  ✔️ Cutting-edge kitchen technology and food processing
                </p>
                <p>
                  <u>Our Vision: </u>
                  Just as strong foundations build great cities, we aim to create a robust network of taste and service across every corner of India.
                  “When it comes to flavor, service, and trust — there’s only one name: Brajesh Ki Chai!”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="Team-heading">
              <h4>Founder</h4>
              <h1>
                Pillar of <span>Our</span> success
              </h1>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              {copartner.map((partner, index) => (
                <div className="col-md-6 mt-2" key={index} >
                  <div className="card2">
                    <div className="partner-box">
                      <img src={partner.image} alt="Memberimg" />
                    </div>
                    <div className="partner">
                      <h2>{partner.name}</h2>
                      <h6>{partner.role}</h6>
                      <p>{partner.des}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 Team-heading text-center mb-4">
              <h4>OUR TEAM</h4>
              <h1>
                Meet <span>Our</span> Expert
              </h1>
            </div>

            {teamMembers.map((member, index) => (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
                <div className="card1">
                  <div className="image-box">
                    <img src={member.image} alt="Memberimg" />
                  </div>
                  <div className="content">
                    <h2>{member.name}</h2>
                    <h6>{member.role}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section>
        <Brandslide />
      </section>
    </>
  );
};

export default Aboutus;
