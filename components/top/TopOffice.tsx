import React, { useEffect, useCallback } from "react";
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

  // let num = -1;

  // const slider = useCallback(() => {
  //   if (typeof window === "object") {
  //     let imgItems = document.querySelectorAll(".slide-img");

  //     console.log(imgItems);
  //     console.log(imgItems[0]);

  //     if (num >= 0) {
  //       imgItems[num].style.opacity = "0";
  //     }
  //     num++;
  //     if (num >= imgItems.length) {
  //       num = 0;
  //     }
  //     imgItems[num].style.opacity = "1";

  //     setTimeout(() => {
  //       slider();
  //     }, 2000);
  //   }
  // });
  // useEffect(() => {
  //   slider();
  // }, [slider]);

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
    <div className="top-office h-[120%] py-20 grid grid-cols-2 items-center max-md:block">
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
      <div className=" w-[50%] top-[28%] right-[2%] mx-auto max-md:w-[80%]">
        <p className="my-[15%]">
          テレワーク中心の働き方が進む中でも、コミュニケーションに悩む人も多くいると思います。私たちは、そこに様々な選択肢を提供します。
        </p>
        <p className="my-[15%]">
          12月1日にリニューアルされた東京本社のオフィスが公開されました。これまで以上の想いが込められています。
        </p>
        <div>
          <Btn url={"/office"} />
        </div>
      </div>
    </div>
  );
}

export default TopOffice;
