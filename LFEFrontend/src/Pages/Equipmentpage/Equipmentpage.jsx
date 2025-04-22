import React, {useEffect, useRef} from 'react'
import Equipment from '../../Components/RentalEquiment/Equipment';
import Section1 from "../../Components/Homesection1/Section1";

const Equipmentpage = () => {
               const triggerRef = useRef(null);
   
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  
  return (
    <>
       

         <section ref={triggerRef}>
        <div className="container-fluid">
          <div className="row">
            <div className="hero">
              <h1>CATEGORIES</h1>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Section1 triggerRef={triggerRef} />
      </section>

      <section>
        <Equipment />
      </section>

    </>
  )
}

export default Equipmentpage