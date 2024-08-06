import React from "react";

const SuccesClient = ({ title, text }) => {
  return (
    <div className=" happy-client-box">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h2 className="small-heading secondary-text medium-text ">{title}</h2>
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
