import React, { useEffect } from "react";
import Image from "next/image";
import Btn from "../atoms/Btn";

function Choice() {
  interface Data {
    type: string;
    url: string;
    img: string;
    alt: string;
    style: { jobs: string; p: string[] }[];
  }
  const choiceData: Data[] = [
    {
      type: "A",
      url: "/workstyle",
      img: "/place.png",
      alt: "オフィスの写真",
      style: [
        {
          jobs: "働く地の選択",
          p: [
            "こだわりの場所仕事をするワークスタイル自分が最も集中できる環境を作りましょう。",
          ],
        },
      ],
    },
    {
      type: "B",
      url: "/place",
      img: "/fulltere.png",
      alt: "テレワークの写真",
      style: [
        {
          jobs: "フルテレワーカー",
          p: [
            "当社には全国6都道県8箇所北海道、群馬、東京、神奈川、埼玉、広島）に自宅でフルテレワーク（フルリモートワーク）で勤務をしている社員が8名おり2020年3月現在）、自宅にいながらミーティングにも参加しています。職種はデザイナーやプログラマー、エバンジェリストなど、在宅で仕事ができるのであれば特に限定していません。",
          ],
        },
        {
          jobs: "居住地が自由",
          p: [
            "都内、関東、地方、あるいは世界中で仕事ができます。だからこそ、フルテレワーカーが実現できるのです。",
          ],
        },
      ],
    },
    {
      type: "A",
      url: "/workstyle",
      img: "/time.png",
      alt: "在宅ワークの写真",
      style: [
        {
          jobs: "働く時間の選択",
          p: [
            "もっと自由に時間に縛られないワークスタイル一番集中できる時間や、予定や急用にも柔軟に対応できることでワークスタイルとライフスタイルがマッチする。",
          ],
        },
      ],
    },
    {
      type: "B",
      url: "/time",
      img: "/flex.jpeg",
      alt: "フルフレックスタイム制の写真",
      style: [
        {
          jobs: "フルフレックス",
          p: [
            "コアタイムを設けないフルフレックスタイム制およびコアタイムありのフレックスタイム制を導入しています。極端に言えば1日1時間だけ働く日もあれば、10時間働く日があってもOKです。1ヶ月の労働時間が基準を満たしていれば問題ありません。例えば、経理部のように月初、月半ば、月末で業務量が異なる部署や、子育てをしている社員に喜ばれています。また、テレワークと併用することができるので、勤務時間を日によって変えながら自宅でテレワークすることができます。時短勤務でフルフレックス制度を利用することも可能なので、より自由度の高い働き方が可能です。",
          ],
        },
      ],
    },
    {
      type: "A",
      url: "/workstyle",
      img: "/workstyle.png",
      alt: "オフィスの写真",
      style: [
        {
          jobs: "働き方の選択",
          p: [
            "日本でもっとも自由なワークスタイル様々な働き方を提供することで、多くの方にマッチすることが可能です。それにより、ミライの選択肢をカタチづくることができます。",
            "私たちは、テレワーク・フルフレックスの他にも、元々の出社というカタチを提案します。なぜ、今出社というカタチを取ったのか。それはコミュニケーションが大きく関わってきます。生のコミュニケーションを大切にしているからこそ、いい発想が生まれ、新しいカタチをつくれると思います。",
          ],
        },
      ],
    },
  ];
  const fade = () => {
    if (typeof window === "object") {
      const targets = document.getElementsByClassName("fade");
      for (let i = targets.length; i--; ) {
        let observer = new IntersectionObserver((entries, observer) => {
          for (let j = entries.length; j--; ) {
            if (entries[j].isIntersecting) {
              entries[j].target.classList.add("active");
            } else {
              entries[j].target.classList.remove("active");
            }
          }
        });
        observer.observe(targets[i]);
      }
    }
  };
  useEffect(() => {
    fade();
  }, []);

  return (
    <>
      {choiceData.map((items, index) =>
        items.type === "A" ? (
          <div
            className="flex justify-center items-center mt-[260px] max-md:block max-md:mt-[120px]"
            key={index}>
            <Image
              src={items.img}
              alt={items.alt}
              width={1088}
              height={725}
              className="w-2/3 max-md:w-full"></Image>

            <div className="w-[30%] m-[5%] max-md:w-[90%]">
              {items.style.map((item, key) => (
                <div key={key}>
                  <h3 className="fade choice-font max-md:text-2xl">
                    {item.jobs}
                  </h3>
                  <p className="text-base my-10 max-md:items-center">
                    {item.p}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div key={index}>
            <div className="flex flex-row-reverse justify-center items-center mt-[120px] max-md:block max-md:mt-[120px]">
              <Image
                src={items.img}
                alt={items.alt}
                width={1088}
                height={725}
                className="w-1/2 max-md:w-full"></Image>
              <div className="w-[50%] m-[5%] max-md:w-[90%]">
                {items.style.map((item, key) => (
                  <div key={key}>
                    <h4 className="fade h4-font max-md:text-xl">{item.jobs}</h4>
                    <p className="text-base my-10">{item.p}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-[80px] max-md:mt-[60px]">
              <Btn url={items.url} />
            </div>
          </div>
        )
      )}
      <div className="mt-[80px] mb-[280px] max-md:mt-[60px] max-md:mb-[60px]">
        <Btn url={"/workstyle"} />
      </div>
    </>
  );
}

export default Choice;
