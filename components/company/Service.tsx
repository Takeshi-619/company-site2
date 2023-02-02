import React from "react";
import View from "../atoms/View";
import Image from "next/image";

function Service() {
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
      url: "https://www.cpi.ad.jp/",
      text: `表現をもっとカンタンに`,
    },
    {
      img: "/twilio.png",
      alt: "Twilioサービスのロゴ",
      url: "https://www.cpi.ad.jp/",
      text: `圃場を常に見守る。`,
    },
    {
      img: "/teru.png",
      alt: "てるちゃんサービスのロゴ",
      url: "https://www.cpi.ad.jp/",
      text: `繋ぐをもっと手軽に。`,
    },
  ];
  return (
    <div>
      <h2 className="mt-[150px] text-center h2-font mb-[130px] max-md:mt-[100px] max-md:mb-[80px]">
        service
      </h2>

      <div className=" pt-[150px] pb-[100px] grid grid-cols-2 grid-rows-2 border w-[85%] mx-auto bg rounded-md max-md:block">
        {serviceData.map((items, index) => (
          <div key={index} className="pb-[50px]">
            <div className="pt-10 px-15 w-[60%] justify-center items-center border rounded-3xl min-w-[320px] bg-white max-md:w-[90%] max-md:max-w-[320px] h-full mx-auto">
              <Image
                src={items.img}
                alt={items.alt}
                width={200}
                height={200}
                className="mx-auto m-10 w-[50%] h-auto"></Image>
              <div className="">
                <p className="pb-5 text-center font-bold">{items.text}</p>
                <div className="pb-10">
                  <View url={items.url} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Service;
