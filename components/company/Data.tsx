import React from "react";
import Image from "next/image";
import { useState } from "react";

function Data() {
  const svgData = [
    {
      id: "1",
      src: "/childcare.png",
      text: "男女ともに子育て中の社員の多く、安心して休業休業し、育てながらでも長く働きやすい環境を整えています。",
    },
    {
      id: "2",
      src: "/english.png",
      text: "英語を使用する機会もあるため、社員の自発的な語学スキルアップを支援しています。TOEICの受験費用を会社が負担するほか、外部英会話学校の法人割引制度が適用されます。",
    },
    {
      id: "3",
      src: "/holidays.png",
      text: "有給は一斉に20日付与しています。その平均消化率は13.7日です。",
    },
    {
      id: "4",
      src: "/overtime.png",
      text: "全体の平均残業時間は17.8時間です。部署の部署の業務量や繁忙期などにより異なりますが、職種問わず、残業はあまり多くありません。",
    },
    {
      id: "5",
      src: "/qualification.png",
      text: "業務に直結するスキルの向上、社員の自発的な学習の支援を目的に、１つの資格に対して最大２回まで試験費用の全額を会社が負担します。",
    },
    {
      id: "6",
      src: "/sub.png",
      text: "社外でビジネスの経験値を高めることが目的で、届け出が受理された場合副業が可能です。",
    },
  ];

  const [show, setShow] = useState<boolean>(false);
  const [active, setActive] = useState<number>(0);

  function modol(index: number) {
    setActive(index);
    setShow(true);
  }

  return (
    <div>
      <h2 className="mt-[280px] h2-font text-center max-md:mt-[160px]">Data</h2>
      <div className="mt-[120px] w-[60%] mx-auto grid grid-rows-2 grid-cols-3 max-md:grid-rows-3 max-md:grid-cols-2">
        {svgData.map((items, index) => (
          <div key={index} className="mx-auto p-4">
            <Image
              id={items.id}
              src={items.src}
              alt="福利厚生"
              height={200}
              width={200}
              className="w-full h-auto"
              onClick={(e) => modol(index)}></Image>
          </div>
        ))}
      </div>
      {show && (
        <div className="fixed z-[999] h-full w-full bg-[rgba(0,0,0,0.3)] top-0 left-0">
          <div className="absolute inset-0 m-auto w-1/4 h-1/4 base-color">
            <div className="w-[80%] absolute data">{svgData[active].text}</div>
            <button
              className="absolute right-0 w-[20%] mx-auto border"
              onClick={() => setShow(false)}>
              close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Data;
