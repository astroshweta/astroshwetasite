"use client";
import { Box } from "@mui/material";
import Carousel from "react-slick"; // Add this for carousel functionality
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonials, stats } from "@/app/utils/constants";
import SectionTitle from "../ui/SectionTitle";

const settings = {
  dots: true,
  autoplay: true,
  autoplaySpeed: 5000,
  infinite: true,
  speed: 500,
  arrows: true,
  slidesToShow: 2,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Testimonials = () => {
  return (
    <>
      <Box id="testimonials" sx={{ textAlign: "center", padding: 4 }}>
        <section id="home" className="pt-[90px] mb-[90px]">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12 col-sm-12">
                <div
                  className="sm:w-4/5 mx-auto my-0 sm:px-10 px-5 py-[35px] rounded-[100px] bg-[#e8c83e] 
                        flex flex-col sm:flex-row justify-around items-center gap-4"
                >
                  {stats.map((item, index) => (
                    <div
                      key={index}
                      className="text-center flex flex-col justify-center items-center"
                    >
                      <span className="leading-none font-bold text-center lg:text-[50px] text-3xl">
                        {item.value}
                      </span>
                      <span className="counter-title lg:text-base text-sm font-normal mt-1.5">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="row justify-content-center">
          <div className="col-xl-12">
            <SectionTitle className="text-center">
              <SectionTitle.Title>
                What <span className="text-[#e8c83e]">Amazing</span> peoples
                Says About me
              </SectionTitle.Title>
            </SectionTitle>
          </div>
        </div>
      </Box>
      <div className="mt-15">
        <Carousel {...settings}>
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-between text-center p-6 border border-gray-600 rounded-2xl text-gray-300 w-full max-w-lg mx-auto min-h-[180px] shadow-lg h-[300px]"
            >
              <p className="text-lg font-light leading-relaxed flex-grow">
                {item.review}
              </p>
              <div className="mt-auto flex flex-col items-center">
                <h5 className="text-xl font-semibold text-white">
                  {item.name}
                </h5>
                <p className="text-sm font-medium text-yellow-400">
                  Consultation Review
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Testimonials;
