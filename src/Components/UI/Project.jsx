import React from "react";

// Props = url_demo |  title  | desc  | url_code  |

function Project(props) {
  const classN =`ac_project col-md-6 col-lg-4 mt-5 mb-5 mt-5 mb-5 ${props.active}`
  const btn_class=`btn btn-primary ${props.no_demo}`
  return (
    <>
      <div className={classN} data-filter-show={props.active} data-aos="fade-up">
        <div className="card border-0">
          <a
            href={props.url_demo}
            target="_blank"
            rel="noreferrer"
          >
            <img src={props.img} className="card-img-top" alt={props.title} />
          </a>
          <div className="card-body">
            <h5 className="card-title text-primary fw-normal text-uppercase">
              {props.title}
            </h5>
            <p className="card-text text-white-50 lh-base text-capitalize">
              {props.desc}
            </p>
            <div className="links d-flex justify-content-between">
              <a
                href={props.url_code}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Code
              </a>
              <a
                href={props.url_demo}
                target="_blank"
                rel="noreferrer"
                className={btn_class}
              >
                Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
