import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { lawData } from "../../utils/ApplicationData";

const LawCard = () => {
  return (
    <div className="d-flex gap-4 mt-5 ">
      {lawData.map((cardData, index) => {
        console.log(cardData);
        return (
          <div
            className="law-card d-flex justify-content-center align-items-center marquee"
            key={index}
          >
            <div>
              <div>
                <img className="law-card-image" src={cardData.src} />
              </div>
              <div className="mt-3 ms-2">
                <div>
                  <h2 className="paragraph medium-text dark-text">
                    {cardData.title}
                  </h2>
                </div>
                <div className="law-card-text mt-3">
                  <p className="sub-paragraph regular-text text-paragraph">
                    {cardData.paragraph}
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center mt-5 law-card-button">
                <div>
                  <span className="secondary-text sub-paragraph light-text">Exploe More</span>
                </div>
                <div className="law-card-icon">
                  <FaArrowRight className="secondary-text" />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LawCard;
