import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ipk6jzm",
        "template_c79604s",
        form.current,
        "9pg8J5AW7f_ldcRHo"
      )
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error);
        }
      );

    //Reset From
    nameRef.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";
  };
  return (
    <div data-aos="zoom-in" id="contact">
      <div className="container pt-5" id="contact">
        <div className="title my-3 text-center">
          <h1>Contact Me</h1>
        </div>
        <div className="contact-form pb-3 pt-5">
          <form ref={form} onSubmit={sendEmail}>
            <div className="row mb-3">
              <div className="col-lg-6 col-md-6 ">
                <div className="mb-3">
                  <input
                    name="user_name"
                    required
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter Your Name"
                    ref={nameRef}
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 ">
                <div className="mb-3">
                  <input
                    name="user_email"
                    required
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter Your Email"
                    ref={emailRef}
                  />
                </div>
              </div>
            </div>
            <div className="mb-3">
              <textarea
                name="message"
                required
                spellCheck
                className="form-control"
                id="Msg"
                rows="3"
                placeholder="Your Message"
                ref={messageRef}
              ></textarea>
            </div>
            <div className="col text-center">
              <button type="submit" className="btn-custom">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
