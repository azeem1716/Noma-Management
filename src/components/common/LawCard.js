import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import {
  FaArrowRightLong,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { lawData } from "../../utils/ApplicationData";

const LawCard = () => {
  return (
    <div className="d-flex justify-content-center  align-items-center gap-4 mt-5 services-swiper">
      <Swiper 
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={4}
        // centeredSlides={true}
        // navigation={{ clickable: true }}
        loop
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
      >
        {lawData.map((cardData, index) => (
          <SwiperSlide key={index}>
            <div className="law-card d-flex justify-content-center align-items-center ">
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
                    <span className="secondary-text sub-paragraph light-text">
                      Exploe More
                    </span>
                  </div>
                  <div className="law-card-icon">
                    <FaArrowRight className="secondary-text" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LawCard;

// <div
// className="law-card d-flex justify-content-center align-items-center "
// key={index}
// >
// <div>
//   <div>
//     <img className="law-card-image" src={cardData.src} />
//   </div>
//   <div className="mt-3 ms-2">
//     <div>
//       <h2 className="paragraph medium-text dark-text">
//         {cardData.title}
//       </h2>
//     </div>
//     <div className="law-card-text mt-3">
//       <p className="sub-paragraph regular-text text-paragraph">
//         {cardData.paragraph}
//       </p>
//     </div>
//   </div>
//   <div className="d-flex justify-content-between align-items-center mt-5 law-card-button">
//     <div>
//       <span className="secondary-text sub-paragraph light-text">Exploe More</span>
//     </div>
//     <div className="law-card-icon">
//       <FaArrowRight className="secondary-text" />
//     </div>
//   </div>
// </div>
// </div>
