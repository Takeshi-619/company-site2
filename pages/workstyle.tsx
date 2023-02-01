import React from "react";
import Image from "next/image";
import Head from "next/head";
import Close from "../components/atoms/Close";
import OfficeBtn from "../components/atoms/OfficeBtn";

function workstyle() {
  interface Data {
    fv: string;
    zoomImg: string;
    office: string;
    h2: string;
    text: { h3: string; p: string }[];
    text2: { h3: string; p: string };
    text3: { h3: string; p: string };
  }
  const topData: Data[] = [
    {
      fv: "/flex.jpeg",
      zoomImg: "/zoom.png",
      office: "/office.png",
      h2: "働き方の選択",
      text: [
        {
          h3: "フルテレワーカー",
          p: "当社には全国6都道県8箇所(北海道、群馬、東京、神奈川、埼玉、広島)に自宅でフルテレワーク(フルリモートワーク)で勤務をしている社員が8名おり(2020年3月現在)、自宅にいながらミーティングにも参加しています。職種はデザイナーやプログラマー、エバンジェリストなど、在宅で仕事ができるのであれば特に限定していません。",
        },
        {
          h3: "フルフレックス",
          p: "コアタイムを設けないフルフレックスタイム制およびコアタイムありのフレックスタイム制を導入しています。極端に言えば1日1時間だけ働く日もあれば、10時間働く日があってもOKです。1ヶ月の労働時間が基準を満たしていれば問題ありません。例えば、経理部のように月初、月半ば、月末で業務量が異なる部署や、子育てをしている社員に喜ばれています。また、テレワークと併用することができるので、勤務時間を日によって変えながら自宅でテレワークすることができます。時短勤務でフルフレックス制度を利用することも可能なので、より自由度の高い働き方が可能です。",
        },
      ],
      text2: {
        h3: "テレワーク",
        p: "職種に関係なく全社員が日常的にテレワークを利用することができ、実際に今まで約8割の社員が日常でテレワークを利用したことがあります。丸一日テレワークでなくとも、午前中は自宅でテレワークをして午後から出社や、逆に午前中出社して午後からテレワークを行いたい時など、業務に支障なく仕事を効率的に行える環境であればいつでも利用可能です。",
      },
      text3: {
        h3: "出社",
        p: "素敵なオフィスでいつでも仕事ができます。働き方改革を進める中で、出社することで生まれるコミュニケーションを大事にする私たちはテレワークと出社をその日のコンディションや仕事内容、また、同期に会いたいといった様々な理由で選べます。",
      },
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
        {topData.map((items, index) => (
          <div key={index}>
            <div className="flex justify-items-center items-center mb-[180px]">
              <Image
                src={items.fv}
                alt={""}
                height={800}
                width={900}
                className="w-[80%] h-auto"
                priority></Image>
              <h2 className="load-fade writing-mode choice-font mx-auto max-md:text-xl">
                {items.h2}
              </h2>
            </div>
            {items.text.map((text, index) => (
              <div key={index} className="w-[70%] mx-auto my-20">
                <h3 className="sub-tittle mb-5">{text.h3}</h3>
                <p>{text.p}</p>
              </div>
            ))}
            <div className="w-[70%] mx-auto my-20">
              <Image
                src={items.zoomImg}
                alt={""}
                height={800}
                width={900}
                className="w-full h-auto mb-10"
                priority></Image>
              <h3 className="sub-tittle mb-5">{items.text2.h3}</h3>
              <p>{items.text2.p}</p>
            </div>
            <div className="w-full mx-auto my-20">
              <Image
                src={items.office}
                alt={""}
                height={800}
                width={900}
                className="w-[60%] h-auto mb-10 mx-auto max-md:w-[90%]"
                priority></Image>
              <div className="w-[70%] mx-auto  relative">
                <h3 className="sub-tittle mb-5">{items.text3.h3}</h3>
                <p>{items.text3.p}</p>
                <div className="my-10 items-center absolute right-0 max-md:bottom-[-38%]">
                  <OfficeBtn url={"/office"} />
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="pb-20">
          <Close url={"/"} />
        </div>
      </main>
    </div>
  );
}

export default workstyle;
