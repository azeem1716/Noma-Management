import React from "react";

const SuccesClient = ({ title, text }) => {
  return (
    <div
      className="d-inline-flex justify-content-center align-items-center bg-blue"
      style={{ height: "115px", width: "152px" }}
    >
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h2 className="sub-haeding secondary-text medium-text ">{title}</h2>
        <span
          className="sub-paragraph secondary-text light-text"
          style={{ marginTop: "-15px" }}
        >
          {text}
        </span>
      </div>
    </div>
  );
};

export default SuccesClient;
