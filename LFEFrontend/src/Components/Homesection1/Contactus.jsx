import React, { useEffect , useRef} from "react";
import { useForm } from "react-hook-form";
import { postData } from "../../services/FetchNodeAdminServices";
import useScrollAnimation from "../../Components/Homesection1/contactscroll"; // adjust path if needed
import "./Contactus.css";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp, IoMail } from "react-icons/io5";
import Swal from "sweetalert2";
import Section1 from "../../Components/Homesection1/Section1";

const Contactus = () => {
                   const triggerRef = useRef(null);
    useScrollAnimation(); // 💥 Animation logic activated!

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await postData("enquiry/enquiry-submit", data);

      if (res) {
        Swal.fire({
          title: "Good job!",
          text: "Inquiry sent successfully!",
          icon: "success",
        });
        reset();
      } else {
        Swal.fire({
          title: "Oops!",
          text: res.message || "Something went wrong. Please try again.",
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

  // 🟡 Trigger animations on scroll
  useEffect(() => {
    const elements = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target); // Animate only once
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div style={{  background: 'linear-gradient(136deg, #fff7e6, #ffe6f0, #e6f7ff)'}} >
      {/* Heading */}
      <section  ref={triggerRef}>
        <div className="container">
          <div className="row">
            <div className="formhead">
              <h2>For Any Inquiry</h2>
            </div>
          </div>
        </div>
      </section>



      <section>
        <Section1 triggerRef={triggerRef} />
      </section>

      {/* Contact Info & Form */}
      <section>
        <div className="container">
          <div className="contact-form-section">
            <div className="row contact-info-page justify-content-center">
            <div className="col-md-3 info-box animate-on-scroll slide-in-left">
                <IoLocationSharp className="icon" />
                <a
                  href="https://maps.app.goo.gl/8aCnhwTspwBCc9La7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>
                    Mukharji Nagar, Circular Rd, U.I.T Colony, Bharatpur, Raj-321001
                  </p>
                </a>
              </div>

              <div className="col-md-3 info-box animate-on-scroll slide-in-bottom">
                <IoMail className="icon" />
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=www.brajesh9983693560@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                 <p style={{ fontSize: "14.5px", margin: 0, wordBreak: "break-word" }}>
                    www.brajesh9983693560@gmail.com
                  </p>
                </a>
              </div>

              <div className="col-md-3 info-box animate-on-scroll slide-in-right">
                <FaPhoneAlt className="icon" />
                <p>
                  <a href="tel:+919983693560">9983693560</a>
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="row form-container">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      {...register("name", {
                        required: "Name is required",
                        minLength: {
                          value: 2,
                          message: "Name must be at least 2 characters",
                        },
                      })}
                    />
                    <span className="text-danger">
                      {errors.name && <p>{errors.name.message}</p>}
                    </span>
                  </div>

                  <div className="col-md-6 mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      {...register("email", {
                        // required: "Email is required",
                        pattern: {
                          value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                          message: "Invalid email address",
                        },
                      })}
                    />
                    <span className="text-danger">
                      {errors.email && <p>{errors.email.message}</p>}
                    </span>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Phone"
                      {...register("phone", {
                        required: "Phone number is required",
                        minLength: {
                          value: 10,
                          message: "Phone number must be 10 digits",
                        },
                        maxLength: {
                          value: 10,
                          message: "Phone number cannot exceed 10 digits",
                        },
                      })}
                    />
                    <span className="text-danger">
                      {errors.phone && <p>{errors.phone.message}</p>}
                    </span>
                  </div>

                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Area, City"
                      {...register("address", {
                        required: "Address is required",
                      })}
                    />
                    <span className="text-danger">
                      {errors.address && <p>{errors.address.message}</p>}
                    </span>
                  </div>
                </div>

                <div className="mb-3">
                  <textarea
                    className="form-control"
                    placeholder="Comment"
                    rows="5"
                    {...register("comment", {
                      required: "Comment is required",
                    })}
                  ></textarea>
                  <span className="text-danger">
                    {errors.comment && <p>{errors.comment.message}</p>}
                  </span>
                </div>

                <div className="button-container">
                  <button type="submit" className="submit-btn">
                    Submit Inquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section style={{margin: '-15px'}}>
        <div className="container-fluid mb-3">
          <div className="row">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.2343782270223!2d77.4821721!3d27.2236482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDEzJzIzLjIiTiA3N8KwMjknMDYuNiJF!5e0!3m2!1sen!2sin!4v1712900832385!5m2!1sen!2sin"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contactus;
