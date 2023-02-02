import React from "react";
import Image from "next/image";
import Btn from "../atoms/Btn";

function TopData() {
  const svgData = [
    "/overtime.png",
    "/childcare.png",
    "/english.png",
    "/sub.png",
  ];
  return (
    <div>
      <h2 className="h2-font text-center mt-[280px] max-md:-mt-20]">Data</h2>
      <p className="w-[30%] mt-16 mx-auto text-center max-md:w-[80%]">
        働き方だけではなく、福利厚生・設備も多く完
        備することで、更に働きやすい環境作りをして います。
      </p>
      <div className="flex mt-[160px] mb-8 w-[80%] justify-around mx-auto max-md:flex-wrap">
        {svgData.map((items, index) => (
          <Image
            src={items}
            alt="福利厚生"
            key={index}
            height={300}
            width={300}
            className="w-[25%] h-auto p-4 max-md:p-3 max-md:w-1/2"></Image>
        ))}
      </div>
      <div className="mt-20">
        <Btn url={"/company"} />
      </div>
    </div>
  );
}

export default TopData;
