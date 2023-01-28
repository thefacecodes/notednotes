import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { FcFlashOn } from "react-icons/fc";

function Testimonial() {
  return (
    <div className="bg-black">
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper w-full h-[400px] mt-6 bg-black text-white"
      >
        <SwiperSlide className="flex justify-center items-center">
          <div className="quote">
            <FcFlashOn className="text-[32px] text-center" />
            <p className="text-[24px] md:text-[32px]">
              I use Note.d for all my note taking when working on a project. I
              send it over to clients to crosscheck for me.
            </p>
            <div className="flex flex-col items-center">
              <img src="image.png" alt="" />
              <h4>Derrick Tsorme</h4>
              <h5 className="text-[14px] text-[#667085]">Product Designer</h5>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <div className="quote">
            <FcFlashOn className="text-[32px] text-center" />
            <p className="text-[24px] md:text-[32px]">
              I use Note.d for all my note taking when working on a project. I
              send it over to clients to crosscheck for me.
            </p>
            <div className="flex flex-col items-center">
              <img src="image.png" alt="" />
              <h4>Derrick Tsorme</h4>
              <h5 className="text-[14px] text-[#667085]">Product Designer</h5>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <div className="quote">
            <FcFlashOn className="text-[32px] text-center" />
            <p className="text-[24px] md:text-[32px]">
              I use Note.d for all my note taking when working on a project. I
              send it over to clients to crosscheck for me.
            </p>
            <div className="flex flex-col items-center">
              <img src="image.png" alt="" />
              <h4>Derrick Tsorme</h4>
              <h5 className="text-[14px] text-[#667085]">Product Designer</h5>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <div className="quote">
            <FcFlashOn className="text-[32px] text-center" />
            <p className="text-[24px] md:text-[32px]">
              I use Note.d for all my note taking when working on a project. I
              send it over to clients to crosscheck for me.
            </p>
            <div className="flex flex-col items-center">
              <img src="image.png" alt="" />
              <h4>Derrick Tsorme</h4>
              <h5 className="text-[14px] text-[#667085]">Product Designer</h5>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Testimonial;
