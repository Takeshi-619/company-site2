import React from "react";
import Image from "next/image";
import View from "../atoms/View";

function TopEntry() {
  return (
    <div>
      <h2 className="h2-font text-center mt-[280px] max-md:mt-[100px]">
        Entry
      </h2>

      <Image
        src={"/entry.jpg"}
        alt={"オフィス正面の写真"}
        height={500}
        width={800}
        priority
        className="mx-auto w-[60%] h-auto mt-[100px] max-md:bg-contain max-md:h-auto max-md:w-[80%] max-md:mt-[80px]"
      />
      <div className="w-[80%] mx-auto">
        <p className="text-center mt-[100px] h4-font font-medium">
          KWCという選択肢を選び、人生の選択肢を増やそう
        </p>
        <div className="py-20">
          <View url={"https://hrmos.co/pages/kddiwebc/jobs"}></View>
        </div>
      </div>
    </div>
  );
}

export default TopEntry;
