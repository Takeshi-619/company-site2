import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay } from "swiper";

function CompanySlider() {
  const sliderImg = ["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg", "/5.jpg"];
  return (
    <div className="">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper">
        {sliderImg.map((img, i) => (
          <SwiperSlide key={i}>
            <Image
              src={img}
              alt="office"
              height={697}
              width={1044}
              className="py-[200px] w-[90%] imgg mx-auto max-md:py-[120]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CompanySlider;
