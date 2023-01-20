import React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

function OffSlider() {
  const sliderData = [
    {
      img: "/ope.jpg",
      alt: "オペレーションエリアの写真",
      number: "01",
      p: "フリーアドレスで自由に",
      area: "オペレーションエリア",
      p2: "フリーアドレスと広々としたデスクであなたの作業の効率をあげてくれます。あなたの好きな場所を見つけて、楽しく仕事をしましょう。",
    },
    {
      img: "/relax.jpg",
      alt: "リラックスエリアの写真",
      number: "02",
      p: "オフィスを第2の自宅に",
      area: "リラックスエリア",
      p2: "ゆったりとした自宅のリビングのようなリラックス空間です。自宅ではできないけど、ゆったりした空間で仕事したい方や、普段はテレワークでオフィスの設備を利用したいけど、慣れた空間で仕事がしたい方におすすめです。",
    },
    {
      img: "/flexible.jpg",
      alt: "フレキシブルエリアの写真",
      number: "03",
      p: "自由を手軽に感じられる",
      area: "フレキシブルエリア",
      p2: "レイアウトを社員が用途に合わせ、自由に変更できるフレキシブルな空間です。軽くミーティングして確認したい、でも会議室が空いてない。そんな時でも手軽に利用できます。",
    },
    {
      img: "/business.jpg",
      alt: "ビジネス構築エリアの写真",
      number: "04",
      p: "庭のような会議室",
      area: "ビジネス構築エリア",
      p2: "Gardenはオフィスの庭として地上10階から見る景色が綺麗で、春には桜が満開になります。",
    },
    {
      img: "/concentration.jpg",
      alt: "高集中エリアの写真",
      number: "05",
      p: "個人作業に最適",
      area: "高集中エリア",
      p2: "オフィスでしかできない仕事をする際に、個人で黙々と作業したい人におすすめの集中エリア",
    },
  ];

  const wrap = useRef<HTMLDivElement | null>(null);
  const items = useRef<HTMLDivElement | null>(null);
  const didEffect = useRef(false);

  useEffect(() => {
    if (didEffect.current) return;
    didEffect.current = true;
    const pagesElement = items?.current;
    if (!pagesElement) return;
    const pagesWrapperElement = wrap?.current;
    if (!pagesWrapperElement) return;
    setupGsap(pagesElement, pagesWrapperElement);
  }, []);

  const setupGsap = (
    pagesElement: HTMLDivElement,
    pagesWrapperElement: HTMLDivElement
  ) => {
    gsap.to(pagesElement, {
      x: () => -(pagesElement.clientWidth - pagesWrapperElement.clientWidth),
      ease: "none",
      scrollTrigger: {
        trigger: ".slider-area",
        start: "top top",
        end: () =>
          `+=${pagesElement.clientWidth - pagesWrapperElement.clientWidth}`,
        // markers: true,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });
  };

  return (
    <div>
      <h2 className="h2-font text-center mt-[280px] pb-[100px]">Work Space</h2>
      <div className="slider-area pt-5 off-bg h-[800px] overflow-hidden ">
        <div className="slider-wrap relative" ref={wrap}>
          <div className="slider-items flex absolute" ref={items}>
            {sliderData.map((items, index) => (
              <div key={index} className="w-3/4 p-20">
                <div className="one">{items.number}</div>
                <Image
                  src={items.img}
                  alt={items.alt}
                  height={800}
                  width={600}
                  className="w-[600px] h-auto max-md:w-[300px]"></Image>
                <p className="py-4">{items.p}</p>
                <div className="h4-font pb-2">{items.area}</div>
                <p>{items.p2}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OffSlider;
