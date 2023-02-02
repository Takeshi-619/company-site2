import React from "react";
import Image from "next/image";

function Interview() {
  const data = [
    {
      name: "川上 智恵",
      img: "/kawakami.png",
      alt: "川上さんの写真",
      jobCareer: "7年",
      intaview: [
        {
          q: "KWCの働き方について思ったことはありますか？",
          a: "在宅勤務&フルフレックスという子育て世代には最高に嬉しい働き方だなぁと思っています。当社の働き方は時代に合わせて変化しているので、今後世の中が変化していっても社員がいちばん働きやすい環境を用意してくれるだろうという安心感があります。",
        },
        {
          q: "一番、嬉しい福利厚生・制度はなんですか？",
          a: "在宅勤務&フルフレックスが本当に嬉しいです。",
        },
        {
          q: "今のオフィスのいいところはなんですか？",
          a: "全てのエリアを見渡せるので、解放感があり、どこに誰がいるかが分かり易いところ。",
        },
        {
          q: "テレワーク・フルクレックスで浮いた時間は何に使っていますか？",
          a: "浮いた時間は家事に充てています。",
        },
      ],
    },
    {
      name: "神森 勉",
      img: "/kamimori.png",
      alt: "神森さんの写真",
      jobCareer: "7年",
      intaview: [
        {
          q: "KWCの働き方について思ったことはありますか？",
          a: "フルフレックスで自分で自由に働く時間を組み立てられるのはとても良いと思います。",
        },
        {
          q: "一番、嬉しい福利厚生・制度はなんですか？",
          a: "中抜け可能なところが大変助かります。急用で数時間だけ抜けたい場合でも、半休等を使う必要がないので。",
        },
        {
          q: "今のオフィスのいいところはなんですか？",
          a: "全てのエリアを見渡せるので、解放感があり、どこに誰がいるかが分かり易いところ。",
        },
        {
          q: "テレワーク・フルクレックスで浮いた時間は何に使っていますか？",
          a: "天気がものすごく良い日は、朝早くからお昼までドローン撮影に興じて、午後から自宅で仕事をするなんてことができます！",
        },
      ],
    },
  ];
  return (
    <div className="mb-20">
      <h2 className="h2-font text-center mt-[280px] max-md:mt-[100px] ">
        Interview
      </h2>
      {data.map((items, index) => (
        <div key={index}>
          <div className="flex justify-center items-center w-[50%] mx-auto mt-[200px] max-md:mt-[100px] max-md:block">
            <div className="mx-auto ">
              <Image
                src={items.img}
                alt={items.alt}
                height={300}
                width={300}></Image>
            </div>
            <div className="pl-6 mx-auto max-md:pt-10 max-md:text-center">
              <h3 className="pb-2">名前</h3>
              <p className="pl-4 pb-4 h4-font max-md:text-xl">{items.name}</p>
              <h3 className="pb-2">社員歴</h3>
              <p className="pl-4 h4-font max-md:text-xl">{items.jobCareer}</p>
            </div>
          </div>
          <dl className="w-[50%] mx-auto mt-[80px] max-md:w-[80%]">
            {items.intaview.map((items, index) => (
              <div key={index} className="mt-10">
                <dt>Q:{items.q}</dt>
                <dd className="pl-5 mt-5 font-bold">A:{items.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      ))}
    </div>
  );
}

export default Interview;
