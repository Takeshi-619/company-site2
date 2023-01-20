import React, { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import View from "../atoms/View";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper";

function TopCompany() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  interface Data {
    img: string;
    alt: string;
    url: string;
    text: string;
  }

  const serviceData: Data[] = [
    {
      img: "/cpi.png",
      alt: "CPIサービスのロゴ",
      url: "https://www.cpi.ad.jp/",
      text: `ビシネスを高速で届ける`,
    },
    {
      img: "/jindo.png",
      alt: "ジンドゥーサービスのロゴ",
      url: "https://www.jimdo.com/jp/",
      text: `表現をもっとカンタンに`,
    },
    {
      img: "/twilio.png",
      alt: "Twilioサービスのロゴ",
      url: "https://cloudapi.kddi-web.com/",
      text: `圃場を常に見守る。`,
    },
    {
      img: "/teru.png",
      alt: "てるちゃんサービスのロゴ",
      url: "https://www.tel-chan.com/",
      text: `繋ぐをもっと手軽に。`,
    },
  ];

  return (
    <div>
      <h2 className="mt-[200px] mb-[150px] text-center h2-font">Company</h2>
      <h3 className="h4-font mb-[100px] text-center">service</h3>
      <Swiper
        loop={true}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 my-[100px]">
        {serviceData.map((items, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center items-center max-md:block">
              <Image
                src={items.img}
                alt={items.alt}
                width={300}
                height={300}
                className="max-md:mx-auto max-md:w-[60%]"></Image>
              <div className="pl-10 max-md:p-0 max-md:mx-auto">
                <p className="pb-5 font-semibold text-md max-md:text-center max-md:pt-5">
                  {items.text}
                </p>
                <View url={items.url} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        loop={false}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper mt-[200px] mb-[100px] w-[80%]">
        {serviceData.map((items, index) => (
          <SwiperSlide key={index}>
            <Image
              src={items.img}
              alt={items.alt}
              width={300}
              height={300}
              className="px-6 max-md:hidden"></Image>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default TopCompany;
