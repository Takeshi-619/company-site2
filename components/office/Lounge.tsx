import React from "react";
import Image from "next/image";
import View from "../atoms/View";

function Lounge() {
  return (
    <div className="my-[20px]">
      <h2 className="h2-font text-center mt-[100px] mb-[200px] max-md:flex flex-col">
        <div>SHARE LUNGE</div> <span>×</span> <div>FLAT BASE</div>
      </h2>
      <div className="relative">
        <div className="flex items-center bg-white max-md:block">
          <Image
            src={"/lounge.jpg"}
            alt="SHARE LOUNGEの写真"
            height={725}
            width={1088}
            className="w-2/3 z-10 max-md:w-full"></Image>
          <div className="p-4">
            <h3 className="h4-font pb-6">SHARE LOUNGE</h3>
            <p>
              書斎のような個室や個人ブース席、会議室など、仕事がはか
              どる環境が充実しつつ、カフェラウンジのような居心地の良
              い空間となっております。仕事の合間や気分転換にお楽しみ
              いただけるようフリードリンク＆スナックを多数ご用意して
              おり、アルコールプランならお酒もお楽しみいただけるので
              仕事帰りに本を読みながらリラックスする場としてもお使い
              いただけます。
            </p>
          </div>
        </div>
        <div className="flex flex-row-reverse items-center -mt-10  bg-white max-md:mt-0 max-md:block">
          <Image
            src={"/flat.jpg"}
            alt="FLAT BASEの写真"
            height={725}
            width={1088}
            className="w-2/3 max-md:w-full"></Image>
          <div className="p-4">
            <h3 className="h4-font pb-6">FLAT BASE</h3>
            <p>
              KDDIウェブコミュニケーションズが独自で運営するコラボ
              レーションスペースです。ライブ配信スタジオ併設のイベン
              トスペース、アートギャラリーやリラックススペースなどを
              備え、多目的に利用できます。充実した音響、映像設備も備
              えており、あらゆる表現をサポートします。
            </p>
          </div>
        </div>
        <div className="items-center mt-[120px]">
          <View url={"https://www.flat-base.com/"} />
        </div>
      </div>
    </div>
  );
}

export default Lounge;
