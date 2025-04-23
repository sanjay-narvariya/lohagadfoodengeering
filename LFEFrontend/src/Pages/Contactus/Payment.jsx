import React, { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import "./Payment.css";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation, IoMail } from "react-icons/io5";
import Swal from "sweetalert2";
import Section1 from "../../Components/Homesection1/Section1";
import Truck from "../../Assets/payment.jpg";
import Truck1 from "../../Assets/payment3.png";
import bhim1 from "../../Assets/bhim1.png";
import bhim2 from "../../Assets/bhim2.png";
import bhim3 from "../../Assets/bhim3.png";
import bhim4 from "../../Assets/bhim4.png";
import bhim5 from "../../Assets/bhim5.png";
import AOS from "aos";

const Payment = () => {

    const triggerRef = useRef(null);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = async (data) => {
        data.access_key = "007fd149-ccb4-4fcb-a57a-0b627d71f057";

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(data),
            });

            const res = await response.json();

            if (res.success) {
                Swal.fire({
                    title: "Good job!",
                    text: "Inquiry sent successfully!",
                    icon: "success",
                });
                reset(); // Clear form inputs after submission
            } else {
                Swal.fire({
                    title: "Oops!",
                    text: "Something went wrong. Please try again.",
                    icon: "error",
                });
            }
        } catch (error) {
            Swal.fire({
                title: "Error",
                text: "Network error. Please try again later.",
                icon: "error",
            });
        }
    };

    useEffect(() => {
        AOS.init();
    }, []);


    return (
        <>
            <section ref={triggerRef}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="hero">
                            <h1>Payment Method</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <Section1 triggerRef={triggerRef} />
            </section>


            <section className="breakfast-love-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10 text-center">
                            <div className="formhead beautiful-heading">
                                <h2>☕ Enjoy hot chai and freshly made breakfast items like</h2>
                                <h3>✨ Samosa, Poha, Kachori & more! ✨</h3>
                                <p className="scan-text">
                                    📲 Scan the QR code using any UPI app (<strong>PhonePe</strong>, <strong>GPay</strong>, <strong>Paytm</strong>, etc.) to pay for your order.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section>
  <div className="container-fluid" >
    <div className="row">
      {/* Truck Image */}
      <div className="col-md-6">
        <div className="section1img" style={{marginBottom:'90px'}}>
          <img
            src={Truck}
            alt="Truck"
            data-aos="fade-right"
            data-aos-duration="3000"
            style={{ borderRadius:'50px'}}
          />
        </div>
      </div>

      {/* Payment Guidelines with inline image */}
      <div className="col-md-6">
        <div className="section2info">
          <div className="section2title">
            <div className="payment-guidelines">
              <h4>Payment Guidelines</h4>
              <h1>Secure, Easy & Transparent Payment Options</h1>
              <p>
                We offer multiple secure payment methods to ensure a smooth experience. Please review the following guidelines before proceeding:
              </p>

              <ul>
                <li><strong>Accepted Methods:</strong>
                  <span className="icons">
                    <img src={bhim1} alt="BHIM UPI" />
                    <img src={bhim2} alt="UPI" />
                    <img src={bhim3} alt="Visa" />
                    <img src={bhim4} alt="MasterCard" />
                    <img src={bhim5} alt="Cash" />
                  </span>
                </li>
                <li><strong>UPI Payments:</strong> Scan the QR code below to pay via any UPI-supported app.</li>
                <li><strong>Verification:</strong> Always confirm the merchant name before completing the transaction.</li>
                <li><strong>Receipt:</strong> You will receive a digital or printed receipt upon successful payment.</li>
                <li><strong>Refunds:</strong> Refunds (if applicable) will be processed as per our refund policy within 5–7 business days.</li>
                <li><strong>Support:</strong> For any payment issues, contact our billing team at <a href="mailto:www.brajesh9983693560@gmail.com">www.brajesh9983693560@gmail.com</a>.</li>
              </ul>
            </div>
          </div>

          {/* Truck1 Image inside same section */}
          <div className="section2img image-inline">
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
</section>




        </>
    );
};

export default Payment;
