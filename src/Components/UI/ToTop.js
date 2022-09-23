import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

function ToTopArrow() {
  window.onscroll = () => {
    let toTop = document.querySelector(".totop");
    if (window.scrollY > 800) {
      toTop.classList.add("active");
    } else {
      toTop.classList.remove("active");
    }
  };

  const handlerShowArrow = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="totop" id="totoparrow" onClick={handlerShowArrow}>
      <FontAwesomeIcon className="icon" icon={faArrowUp} />
    </div>
  );
}

export default ToTopArrow;
