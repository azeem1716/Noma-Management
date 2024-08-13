import React, { useRef } from "react";
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
import { Slider2Data } from "../../utils/ApplicationData";

const Slider2 = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="slider-2-container">
      <div className="max-width container d-flex justify-content-center align-items-center">
      <button ref={prevRef} className="custom-navigation-2 ">
          <FaArrowLeft className="dark-text" />
        </button> 
        <Swiper className="swipper-2"
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={3}
          spaceBetween={20}
        centeredSlides={true}

          // navigation={{ clickable: true }}
          loop
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320:{
              slidesPerView: 1,
              spaceBetween: 50,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          onSwiper={(swiper) => {
            // Make sure Swiper instance is set to the correct navigation elements
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          {Slider2Data.map((data, index) => (
            <SwiperSlide>
              <div key={index}  style={{height:"60px" , maxWidth:"180px"}} >
                <img src={data.src} style={{height:"60px" , maxWidth:"180px"}} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button ref={nextRef} className="custom-navigation-2">
          <FaArrowRight className="dark-text" />
        </button>
      </div>
    </div>
  );
};

export default Slider2;
