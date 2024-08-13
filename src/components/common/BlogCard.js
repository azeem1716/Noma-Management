
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { FaArrowRightLong , FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,} from "react-icons/fa6";
// import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { blogData } from "../../utils/ApplicationData";

const BlogCard = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);


  return (
    <div >
      <div className="container d-flex justify-content-center align-items-center">
        {/* <div> */}
      <button ref={prevRef} className="custom-navigation prev">
          <FaArrowLeft className="secondary-text" />
        </button>   
        {/* </div> */}
 
        <Swiper className="blog-swiper"
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={3}
          centeredSlides={true}
          // navigation={{ clickable: true }}
          loop
          autoplay={{
            delay: 2500,
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
              slidesPerView: 1,
              spaceBetween: 10,
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
          {blogData.map((data, index) => (
            <SwiperSlide className="swipper-slide" key={index}>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <div>
                  <img src={data.src} />
                </div>
                <div className="text-center">
                  <h2 className="text-uppercase text-md montserrat-semi-bold">
                    {data.name}
                  </h2>
                  <h3 className="text-uppercase text-sm  montserrat-semi-bold">
                    {data.designation}
                  </h3>
                  <h4 className="text-capitalize ">
                    Noma Management (Pvt.) Limited
                  </h4>
                </div>
                <div>
                  {/* <div className="social-icon-container d-flex justify-content-center align-items-center gap-2">
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
                  </div> */}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* <div> */}
        <button ref={nextRef} className="custom-navigation next">
          <FaArrowRight className="secondary-text" />
        </button>
        {/* </div> */}
      </div>
    </div>
  
  );
};

export default BlogCard;
