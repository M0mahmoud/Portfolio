import React from "react";

function Contact() {
  return (
    <div data-aos="fade-left">
      <div className="container" id="contact">
        <div className="title my-3 text-center">
          <h1>Contact Me</h1>
        </div>
        <div className="contact-form pb-3 pt-5">
          <form>
            <div className="row mb-3">
              <div className="col-lg-6 col-md-6 ">
                <div className="mb-3">
                  <input
                    name="name"
                    required
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter Your Name"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 ">
                <div className="mb-3">
                  <input
                    name="email"
                    required
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter Your Email"
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
              ></textarea>
            </div>
            <div className="col text-center">
              <button type="submit" className="btn btn-primary">
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
