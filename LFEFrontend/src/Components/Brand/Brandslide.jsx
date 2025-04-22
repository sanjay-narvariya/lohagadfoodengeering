import React from "react";
import "./Brandslide.css";
import Brand1 from "../../Assets/iifl.png";
import Brand2 from "../../Assets/piramal.png";
import Brand3 from "../../Assets/pnb.png";
import Brand4 from "../../Assets/hdfc.jpeg";
import Brand5 from "../../Assets/redtape.png";
import Brand6 from "../../Assets/cantabil.png";
import Brand7 from "../../Assets/novelty.png";
import Brand8 from "../../Assets/kngd.jpeg";
import Brand9 from "../../Assets/jambo.jpeg";
import Brand10 from "../../Assets/iifl.png";
import Brand11 from "../../Assets/piramal.png";
import Brand12 from "../../Assets/pnb.png";
import Brand13 from"../../Assets/hdfc.jpeg";
import Brand14 from "../../Assets/redtape.png";
import Brand15 from "../../Assets/cantabil.png";
import Brand16 from "../../Assets/novelty.png";
import Brand17 from "../../Assets/kngd.jpeg";
import Brand18 from "../../Assets/jambo.jpeg";

const Brandslide = () => {
  const logos = [
    Brand1,
    Brand2,
    Brand3,
    Brand4,
    Brand5,
    Brand6,
    Brand7,
    Brand8,
    Brand9,
    
    Brand10,
    Brand11,
    Brand12,
    Brand13,
    Brand14,
    Brand15,
    Brand16,
    Brand17,
    Brand18
  ];

  return (
    <>
      <div className="container-fluid mt-3 mb-3">
        <div className="row">
          <div className="logo-slider">
            <div className="slider-track">
              {[...logos, ...logos].map(
                (
                  logo,
                  index // Duplicate the logos for seamless scrolling
                ) => (
                  <div key={index} className="slide">
                    <img src={logo} alt={`Logo ${index + 1}`} />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brandslide;
