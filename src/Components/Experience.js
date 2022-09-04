import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

function Experiences() {
  return (
    <>
      <div className="experiences py-5">
        <div className="container " data-aos="fade-right" >
          <div className="title my-3 text-center">
            <h1>Education &amp; Experience</h1>
          </div>
          <div className="ms-5 my-5 text">
            <div className="icon my-5">
              <h3 className="ms-3">2020 : 2024</h3>
              <h4 className="ms-3 text-white-50 ">
                Faculty of Science Zagazig University
              </h4>
              <p className="ms-3 fs-6 text-white-50 lh-base fw-normal  mb-3">
                Computer Science Department
              </p>
            </div>
            <div className="internship">
              <h4 className="ms-3">Summer 2022</h4>
              <h4 className="ms-3 fs-6 text-white-50 lh-base fw-normal  mb-3">
                Kalbonyan Elmarsos Internship
              </h4>
              <p className="ms-3 ">
                <button
                  type="button"
                  className=" lh-base fw-normal  mb-3 btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#modal"
                >
                  Show Details
                </button>
              </p>
            </div>
          </div>
          <div
            className="modal fade"
            id="modal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-fullscreen">
              <div className="modal-content">
                <div className="modal-header">
                  <h6 className="modal-title" id="exampleModalLabel">
                    Kalbonyan Elmarsos Internship
                  </h6>
                  <button
                    type="button"
                    className="btn-close bg-primary"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body mb-2">
                  <p className="m-0">
                    In This Internship, I had Finished The Following Courses
                  </p>
                  <h6 className="my-2">LinkedIn</h6>
                  <FontAwesomeIcon
                    className="me-2 text-primary"
                    icon={faArrowRightLong}
                  />{" "}
                  <a href="https://www.linkedin.com/learning/certificates/131608750b9e842bb7f1a8f30ad29b32d76d78ba3267e280ab534df421784669?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BZ1hS1WI0RzaScvf4Sr5LHw%3D%3D">
                    Programming Foundations: Fundamentals
                  </a>
                  <br />
                  <FontAwesomeIcon
                    className="me-2 text-primary"
                    icon={faArrowRightLong}
                  />{" "}
                  <a href="https://www.linkedin.com/learning/certificates/4f0ed6f09246be106b6c2fe91af0fcb36898a5a09f51f53fc803066ee023c523">
                    Programming-foundations-Beyond-fundamentals
                  </a>
                  <br />
                  <FontAwesomeIcon
                    className="me-2 text-primary"
                    icon={faArrowRightLong}
                  />{" "}
                  <a href="https://www.linkedin.com/learning/certificates/dcb6886ac44cf20792262c56ad516cbc7c0f82da550957ade627387c70665c34">
                    Programming Foundations: Object-Oriented Design
                  </a>
                  <br />
                  <FontAwesomeIcon
                    className="me-2 text-primary"
                    icon={faArrowRightLong}
                  />{" "}
                  <a href="https://www.linkedin.com/learning/certificates/c40dfefaba1638dccae12add1a745a94b1f743bf3b2a99cbe0d68a9356a6b4fd">
                    Programming Foundations: Data Structures
                  </a>
                  <br />
                  <FontAwesomeIcon
                    className="me-2 text-primary"
                    icon={faArrowRightLong}
                  />{" "}
                  <a href="https://www.linkedin.com/learning/certificates/3e008a101d119a0559cb6684668254ba6b7745c2fc467079b1b5b10bf484b439">
                    Programming Foundations: Algorithms
                  </a>
                  <br />
                  <FontAwesomeIcon
                    className="me-2 text-primary"
                    icon={faArrowRightLong}
                  />{" "}
                  <a href="https://www.linkedin.com/learning/certificates/4801a29687ce6111909bf26890ad62677b2ae4d116653e7389aaf1d2de579a6b">
                    Programming Foundations: Design Patterns
                  </a>
                  <br />
                  <FontAwesomeIcon
                    className="me-2 text-primary"
                    icon={faArrowRightLong}
                  />{" "}
                  <a href="https://www.linkedin.com/learning/certificates/14a4fdab38901190586b81aefb9e451ffd1b41599a2fab748e48c49a5d9aa952">
                    Programming-Foundations-Databases
                  </a>
                  <br />
                  <FontAwesomeIcon
                    className="me-2 text-primary"
                    icon={faArrowRightLong}
                  />{" "}
                  <a href="https://www.linkedin.com/learning/certificates/79ac35b143d0180c43dcf47e91bbe2ef2fc0f9bcf9d6d3543f84d2be347078ce">
                    Programming-Foundations-APIs-and-Web-Services
                  </a>
                  <br />
                  <FontAwesomeIcon
                    className="me-2 text-primary"
                    icon={faArrowRightLong}
                  />{" "}
                  <a href="https://www.linkedin.com/learning/certificates/35ce5d64dc293f2e2002a01f4fb92086a8b69cff1e4dd23893f3156c5efa0bb1">
                    Programming Foundations: Software Testing/QA
                  </a>
                  <br />
                  <FontAwesomeIcon
                    className="me-2 text-primary"
                    icon={faArrowRightLong}
                  />{" "}
                  <a href="https://www.linkedin.com/learning/certificates/3fd668c4c077cd05ac4d5d221d699432b4e3902363a352df6e555614061d335f">
                    Learning GitHub
                  </a>
                  <br />
                  <h6 className="my-2">Udemy</h6>
                  <FontAwesomeIcon
                    className="me-2 text-primary"
                    icon={faArrowRightLong}
                  />{" "}
                  <a href="https://drive.google.com/file/d/18Sa9WFv6-EgpIt303wBf9U7ElcbiyBPJ/view">
                    The Modern JavaScript Bootcamp
                  </a>
                  <br />
                  <FontAwesomeIcon
                    className="me-2 text-primary"
                    icon={faArrowRightLong}
                  />{" "}
                  <a href="https://drive.google.com/file/d/15ZXSZZJUh_OVsmVwUWc1j7HbhgyxVgXG/view">
                    React - The Complete Guide (incl Hooks, React Router, Redux)
                  </a>
                  <br />
                  <h6 className="my-2">AWS</h6>
                  <FontAwesomeIcon
                    className="me-2 text-primary"
                    icon={faArrowRightLong}
                  />{" "}
                  <a href="https://camo.githubusercontent.com/9b6e593cec913233d7c1e29a705793ccc0643258dd845b6c4d8e8963665f46a1/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f61636c6f75642d677572752f696d6167652f66657463682f775f3932302c715f6175746f2c665f6175746f2f687474707325334125324625324661636c6f7564677572752d7175697a2d636f6d706c6574696f6e2d63657274696669636174652d70726f64756374696f6e2e73332d616363656c65726174652e616d617a6f6e6177732e636f6d2532463241394232424643314142442e706e67">
                    AWS Certified Cloud Practitioner (CLF-C01)
                  </a>
                  <br />
                  <FontAwesomeIcon
                    className="me-2 text-primary"
                    icon={faArrowRightLong}
                  />{" "}
                  <a href="https://camo.githubusercontent.com/ebc1f66d4fe27c96605438d3b4bce7e467328ebcdcdcf343c4effbec70127795/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f61636c6f75642d677572752f696d6167652f66657463682f775f3932302c715f6175746f2c665f6175746f2f687474707325334125324625324661636c6f7564677572752d7175697a2d636f6d706c6574696f6e2d63657274696669636174652d70726f64756374696f6e2e73332d616363656c65726174652e616d617a6f6e6177732e636f6d2532463330464343333036314435352e706e67">
                    AWS Certified Solutions Architect Associate (SAA-C02)
                  </a>
                  <br />
                  <FontAwesomeIcon
                    className="me-2  text-primary"
                    icon={faArrowRightLong}
                  />{" "}
                  <a href="https://github.com/M0mahmoud/Kalbonyan-Elmarsos/tree/main/04-Serverless-Stack-Project">
                    Serverless-Stack-project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experiences;
