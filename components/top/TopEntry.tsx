import React from "react";
import Image from "next/image";
import View from "../atoms/View";

function TopEntry() {
  return (
    <div>
      <h2 className="h2-font text-center mt-[280px] max-md:mt-[250px]">
        Entry
      </h2>

      <Image
        src={"/entry.jpg"}
        alt={"オフィス正面の写真"}
        height={500}
        width={800}
        priority
        className="mx-auto w-[60%] h-auto mt-[100px] max-md:bg-contain max-md:h-auto max-md:w-[80%]"
      />
      <div className="w-[80%] mx-auto">
        <p className="text-center mt-[100px] h4-font font-medium">
          KWCという選択肢を選び、人生の選択肢を増やそう
        </p>
        <div className="my-20">
          <View url={"https://hrmos.co/pages/kddiwebc/jobs"}></View>
        </div>
      </div>
    </div>
  );
}

export default TopEntry;
