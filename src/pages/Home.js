import React from "react";
import GreenBtn from "../components/common/GreenBtn";
import { FaArrowRight } from "react-icons/fa";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ExploreCard from "../components/common/ExploreCard";
import SuccesClient from "../components/common/SuccesClient";
import LawCard from "../components/common/LawCard";
import BlogCard from "../components/common/BlogCard";

const Home = () => {
  return (
    <div>
      <div>
        <div className="hero_section d-flex justify-content-center align-items-center">
          <div className="container d-flex justify-content-between align-items-center">
            <div className="hero-text-section">
              <h2 className="secondary-text bold-text main-heading">
                Empowering{" "}
                <span className="primary-text">Your Business Solutions</span>{" "}
                For Success{" "}
              </h2>
              <p className="text-paragraph light-text paragraph">
                Noma Management (Pvt.) Ltd is a well-established and reputable
                legal and business consultancy firm with a specific focus on the
                banking sector. With a proven track record of delivering expert
                guidance and innovative Solutions
              </p>
              <GreenBtn text={"Explore More"} />
            </div>
            <div>
              <div className="chat_widget_card p-3 ">
                <div className="container d-flex flex-column  gap-5">
                  <div className="d-flex gap-2">
                    <div>
                      <p className="secondary-text light-text sub-paragraph">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s.
                      </p>
                    </div>
                    <div>
                      <img src={require("../assests/images/Abstract.png")} />
                    </div>
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    <div className="live_chat">
                      <img src={require("../assests/images/live-chat.png")} />
                    </div>
                    <div className="d-flex justify-content-center align-items-center gap-1">
                      <span className="secondary-text light-text paragraph">
                        Chat Room
                      </span>
                      <FaArrowRight className="secondary-text" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-5">
        <div className="container max-width text-center">
          <h2 className="sub-heading text-black regular-text">
            Explore More About OUr{" "}
          </h2>
          <h2 className="sub-heading primary-text regular-text">
            Noma Management (Pvt.) Ltd{" "}
          </h2>
          <p className="sub-paragraph text-paragraph light-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
        <div className="container max-width">
        <ExploreCard />
      </div>
      </div>


<div className="services-section py-5">
      <div className="container max-width  ">
   <div className=" d-flex justify-content-between align-items-center secondary-text">
   <div>
      <h2 className="small-heading light-text">Noma Management (Pvt.) Ltd Services</h2>
    </div>
    <div>
      <span className="sub-paragraph light-text">View All <FaArrowRight/>  </span>
    </div>
   </div>
      </div>
      <LawCard/>
</div>


<div className="about-us-section">
<div className="container max-width">

  <div>
    
  </div>

</div>
</div>
   

     

      <div className="law-section">
        <div className=" container ">
          <div className="container max-width row gx-5 ">
            <div className="col-6">
              <img
                className="law-section-image"
                src={require("../assests/images/Law-section-image.png")}
              />
            </div>

            <div className="col-6 mt-5 d-flex justify-content-center align-items-center">
              <div>
                <div>
                  <h2 className="text-dark-2 medium-text small-heading">
                    {" "}
                    Real <span className="primary-text">Estate Law</span>{" "}
                  </h2>
                  <p className="sub-paragraph regular-text text-paragraph">
                    {" "}
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s{" "}
                  </p>
                  <GreenBtn text={"Explore More"} />
                </div>

                <div className="mt-5">
                  <div>
                    <h2 className="text-dark-2 medium-text small-heading">
                      {" "}
                      Satisfied Coustumers{" "}
                      <span className="primary-text">
                        Fueling our succes
                      </span>{" "}
                    </h2>
                  </div>

                  <div className="d-flex justify-content-between mt-3">
                    <SuccesClient title={"250+"} text={"Happy Clients"} />
                    <SuccesClient title={"950/0"} text={"Success Rate"} />
                    <SuccesClient title={"10+"} text={"Years Of Experience"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

<div className="blog-section ">
<div className="container max-width">
  <div>
    <h2 className="sub-heading medium-text secondary-text text-center">Our Latest Blogs</h2>
  </div>
  <div className="mt-4">
      <BlogCard/>
  </div>
</div>
</div>

    </div>
  );
};

export default Home;
