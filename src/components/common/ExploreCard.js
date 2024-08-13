import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useState, useRef } from "react";
import {exploreCardData} from "../../utils/ApplicationData";

const ExploreCard = () => {
  return (
    <div className="container max-width d-flex flex-column flex-xl-row justify-content-center align-items-center gap-4">
      {exploreCardData.map((cardData, index) => (
        <div key={index}>
          <div className="explore-card p-4 text-dark-2  ">
            <div className="d-flex gap-2">
            <div className="explore-card-icon">
              {cardData.component}
              </div>
            <div >
              <h2 className="small-heading medium-text ">
                {cardData.title}
              </h2>
            </div>
            </div>
            <div className="mt-1">
              <p className="sub-paragraph light-text ">
                {cardData.paragraph}
              </p>
            </div>
            <div className="explore-card-button" >
              <span className="sub-paragraph medium-text ">
                Explore More{" "}
                <FaArrowRight className="sub-paragraph light-text " />{" "}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExploreCard;

// { src,title, paragraph}
