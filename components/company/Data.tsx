import React from "react";
import Image from "next/image";
import { useState } from "react";

function Data() {
  const svgData = [
    {
      src: "/childcare.png",
      text: "男女ともに子育て中の社員の多く、安心して休業休業し、育てながらでも長く働きやすい環境を整えています。",
    },
    {
      src: "/english.png",
      text: "英語を使用する機会もあるため、社員の自発的な語学スキルアップを支援しています。TOEICの受験費用を会社が負担するほか、外部英会話学校の法人割引制度が適用されます。",
    },
    {
      src: "/holidays.png",
      text: "有給は一斉に20日付与しています。その平均消化率は13.7日です。",
    },
    {
      src: "/overtime.png",
      text: "全体の平均残業時間は17.8時間です。部署の部署の業務量や繁忙期などにより異なりますが、職種問わず、残業はあまり多くありません。",
    },
    {
      src: "/qualification.png",
      text: "業務に直結するスキルの向上、社員の自発的な学習の支援を目的に、１つの資格に対して最大２回まで試験費用の全額を会社が負担します。",
    },
    {
      src: "/sub.png",
      text: "社外でビジネスの経験値を高めることが目的で、届け出が受理された場合副業が可能です。",
    },
  ];

  const [show, setShow] = useState(false);

  const clickHandle = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    console.log(e.currentTarget.src);
    const target = e.currentTarget.src;

    const modal = () => {
      svgData.map((items) => {
        if (target == items.src) {
          // setShow(true);
          alert("aaaa");
        }
      });
    };

    modal();
  };
  function Modal({ text }: { text: string }) {
    const closeModal = () => {
      setShow(false);
    };
    if (show) {
      return (
        <div id="overlay" onClick={closeModal}>
          <div id="content" onClick={(e) => e.stopPropagation()}>
            {text}
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }

  return (
    <div>
      <h2 className="mt-[280px] h2-font text-center max-md:mt-[160px]">Data</h2>
      <div className="mt-[120px] w-[90%] mx-auto grid grid-rows-2 grid-cols-3 max-md:grid-rows-3 max-md:grid-cols-2">
        {svgData.map((items, index) => (
          <div key={index} className="mx-auto p-4">
            <Image
              src={items.src}
              alt="福利厚生"
              height={200}
              width={200}
              className="w-full h-auto"
              onClick={(e) => clickHandle(e)}></Image>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Data;
