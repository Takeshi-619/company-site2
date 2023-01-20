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
      <h2 className="h2-font text-center mt-[280px] max-md:-mt-20">Data</h2>
      <p className="w-[30%] mt-16 mx-auto max-md:w-[80%]">
        働き方だけではなく、福利厚生・設備も多く完
        備することで、更に働きやすい環境作りをして います。
      </p>
      <div className="flex mt-[160px] mb-8 w-[80%] justify-around mx-auto max-md:grid max-md:grid-cols-2">
        {svgData.map((items, index) => (
          <Image
            src={items}
            alt="福利厚生"
            key={index}
            height={250}
            width={250}
            className="w-full p-4 max-md:p-3"></Image>
        ))}
      </div>
      <div className="mt-20">
        <Btn url={"/conpany"} />
      </div>
    </div>
  );
}

export default TopData;
