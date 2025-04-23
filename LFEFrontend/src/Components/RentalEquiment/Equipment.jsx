import React, { useEffect, useState } from "react";
import { getData, serverURL } from "../../services/FetchNodeAdminServices";
import "./Equipment.css";
import { Link, useNavigate } from "react-router-dom";

const Equipment = () => {
  const navigate = useNavigate();
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    const fetchAllCategory = async () => {
      try {
        const result = await getData("category/get-all-category");
        if (result.status) {
          setCategoryList(result.data.categories);
        } else {
          console.error("Failed to fetch categories:", result.message);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchAllCategory();
  }, []);


  useEffect(() => {
    const handleFocus = () => {
      window.location.reload(); // 👈 Page refresh on window focus
    };
  
    window.addEventListener("focus", handleFocus);
    return () => {
      window.removeEventListener("focus", handleFocus);
    };
  }, []);
  

  return (
    <div className="RentalEquipment" style={{ padding:"20px"}}>
      <div className="row">
        <div className="equipment-title">
          <h3>Awesome Services</h3>
          <h1>Chai ke saath kaam bhi</h1>
          <p>
            Jaise ek garam chai din bana deti hai, waise hi humara top-notch service aapka kaam aasaan bana deta hai. Har kaam bilkul time pe, bilkul fit – kaam ho ya construction site, performance mile fully tight!
          </p>
        </div>

        {/* Auto-scrolling Equipment Cards */}
        <div className="equipment-slider">
          <div className="equipment-track">
            {[...categoryList,...categoryList,...categoryList].map((item, i) => (
              <div key={i} className="equipment-card-wrapper">
                <div className="card equipment-card">
                  <div
                    className="equipment-img"
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      src={`${serverURL}/${item.categoryimage}`}
                      className="card-img-top"
                      alt={item.categoryname}
                    />
                  </div>
                  <div className="card-body">
                    <h2 className="card-title">{item.categoryname}</h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Equipment;
 
