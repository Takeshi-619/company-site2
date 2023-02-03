import React, { useEffect } from "react";
import Image from "next/image";
import Btn from "../atoms/Btn";

function TopOffice() {
  const sliderImg = [
    "/topOffice1.png",
    "/officeslider2.png",
    "/officeslider3.png",
    "/officeslider4.png",
    "/officeslider6.png",
  ];

  function viewSlide(className: string, slideNo = -1) {
    if (typeof window === "object") {
      let imgArray = document.querySelectorAll<HTMLImageElement>(className);

      if (slideNo >= 0) {
        imgArray[slideNo] && (imgArray[slideNo].style.opacity = "0");
      }
      slideNo++;
      if (slideNo >= imgArray.length) {
        slideNo = 0;
      }
      imgArray[slideNo] && (imgArray[slideNo].style.opacity = "1");

      setTimeout(() => {
        viewSlide(className, slideNo);
      }, 2000);
    }
  }
  useEffect(() => {
    viewSlide(".slide-img");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="top-office h-[120%] py-20 grid grid-cols-2 items-center max-md:block max-md:py-4">
      <div className="slide">
        {sliderImg.map((items, index) => (
          <Image
            className="slide-img w-full left-20 max-md:w-full max-md:left-0 max-md:mx-auto"
            key={index}
            src={items}
            alt={"オフィスの写真"}
            height={300}
            width={500}></Image>
        ))}
      </div>
      <div className=" w-[50%] right-[2%] base-color px-8 py-4 mx-auto max-md:w-[80%]">
        <p className="my-[15%] max-md:my-4">
          テレワーク中心の働き方が進む中でも、コミュニケーションに悩む人も多くいると思います。私たちは、そこに様々な選択肢を提供します。
        </p>
        <p className="my-[15%] max-md:mt-4 max-md:mb-8">
          12月1日にリニューアルされた東京本社のオフィスが公開されました。これまで以上の想いが込められています。
        </p>
        <div className="pb-4">
          <Btn url={"/office"} />
        </div>
      </div>
    </div>
  );
}

export default TopOffice;
