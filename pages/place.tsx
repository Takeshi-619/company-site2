import React from "react";
import Head from "next/head";
import Image from "next/image";
import Close from "../components/atoms/Close";

function place() {
  const data = [
    {
      img: "/fulltere.png",
      h2: "働く地の選択",
      text: [
        {
          h3: "フルテレワーカー",
          p: "当社には全国6都道県8箇所(北海道、群馬、東京、神奈川、埼玉、広島)に自宅でフルテレワーク(フルリモートワーク)で勤務をしている社員が8名おり(2020年3月現在)、自宅にいながらミーティングにも参加しています。職種はデザイナーやプログラマー、エバンジェリストなど、在宅で仕事ができるのであれば特に限定していません。",
        },
        {
          h3: "居住地が自由",
          p: "都内、関東、地方、あるいは世界中で仕事ができます。だからこそ、フルテレワーカーが実現できのです。",
        },
      ],
    },
  ];
  function load_effect() {
    if (typeof window === "object") {
      var element = document.getElementsByClassName("load-fade");
      if (!element) return; // 要素がない場合は終了

      for (var i = 0; i < element.length; i++) {
        element[i].classList.add("is-show");
      }
    }
  }
  setTimeout(load_effect, 1000);
  return (
    <div>
      <Head>
        <title>KDDI Web Comunnications オフィス紹介サイト</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="base-color">
        <div>
          {data.map((items, index) => (
            <div key={index}>
              <div className="flex justify-items-center items-center mb-[180px]">
                <Image
                  src={items.img}
                  alt={""}
                  height={800}
                  width={900}
                  className="w-[80%] h-auto"
                  priority
                />
                <h2 className="load-fade writing-mode choice-font mx-auto max-md:text-xl">
                  {items.h2}
                </h2>
              </div>
              {items.text.map((items, index) => (
                <div key={index} className="w-[70%] mx-auto my-20">
                  <h3 className="sub-tittle mb-5">{items.h3}</h3>
                  <p>{items.p}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="pb-20">
          <Close url={"/"} />
        </div>
      </main>
    </div>
  );
}

export default place;
