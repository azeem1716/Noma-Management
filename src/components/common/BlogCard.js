import React from "react";
import { useRef } from "react";

import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa6";
import { blogData } from "../../utils/ApplicationData";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const BlogCard = () => {
  const swiperRef = useRef(null);

  const handlePrevClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="swiper-wrapper-container">
      <div className="swiper-container">
        {/* <button className="custom-prev" onClick={handlePrevClick}>Prev</button> */}
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={10}
          slidesPerView={3}
          navigation={true}
          // autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={2000} // Adjust speed to control slide transition time
          loop={true}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {blogData.map((data, index) => (
            <SwiperSlide className="swipper-slide" key={index}>
              <div className="blog-card d-flex flex-column justify-content-center align-items-center">
                <div>
                  <img src={data.src} />
                </div>
                <div className="text-center">
                  <h2 className="text-uppercase paragraph medium-text secondary-text">
                    {data.name}
                  </h2>
                  <h3 className="text-uppercase sub-paragraph medium-text secondary-text">
                    {data.designation}
                  </h3>
                  <h4 className="text-capitalize sub-paragraph medium-text secondary-text">
                    Noma Management (Pvt.) Limited
                  </h4>
                </div>
                <div>
                  <div className="social-icon-container d-flex justify-content-center align-items-center gap-2">
                    <div className="social-icon-box">
                      <FaFacebookF className="social-icon" />
                    </div>
                    <div className="social-icon-box">
                      <FaTwitter className="social-icon" />
                    </div>
                    <div className="social-icon-box">
                      <FaInstagram className="social-icon" />
                    </div>
                    <div className="social-icon-box">
                      <FaLinkedinIn className="social-icon" />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <button className="custom-next" onClick={handleNextClick}>Next</button> */}
      </div>
    </div>
  
  );
};

export default BlogCard;
