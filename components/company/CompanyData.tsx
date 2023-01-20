import React from "react";

import CompanySlider from "./CompanySlider";
function CompanyData() {
  const Data = [
    {
      dt: "商号",
      dd: "株式会社 KDDI ウェブコミュニケーションズ",
    },
    {
      dt: "英文社名",
      dd: "KDDI Web Communications Inc.",
    },
    {
      dt: "設立",
      dd: "1987年 2月 25日",
    },
    {
      dt: "",
      dd: "ホスティング事業創業1997年8月",
    },
    {
      dt: "資本金",
      dd: "6,500万円",
    },
    {
      dt: "代表取締役社長",
      dd: "山崎 雅人",
    },
    {
      dt: "取引銀行",
      dd: "三菱UFJ銀行",
    },
    {
      dt: "所在地",
      dd: "東京本社 〒107- 0062 東京都港区南青山2-26-1 D-LIFEPLACE南青山10階",
    },
    {
      dt: "",
      dd: "沖縄オフィス〒904-1106 沖縄県うるま市石川2313-3",
    },
    {
      dt: "",
      dd: "宮古島オフィス〒906-0304 沖縄県宮古島市下地字上地472番地39 宮古島  市役所下地庁舎 3階",
    },
    {
      dt: "事業内容",
      dd: "クラウド・ホスティング事業",
    },
    {
      dt: "",
      dd: "ウェブサービス事業",
    },
    {
      dt: "",
      dd: "プラットホーム事業",
    },
    {
      dt: "サービス	",
      dd: "レンタルサーバー「CPI」",
    },
    {
      dt: "",
      dd: "ホームページ作成サービス「ジンドゥー」",
    },
    {
      dt: "",
      dd: "クラウド電話APIサービス「Twilio」",
    },
    {
      dt: "",
      dd: "農業IoTサービス「てるちゃん」",
    },
    {
      dt: "従業員数",
      dd: "204名（2022年3月末時点、派遣社員を含む）",
    },
    {
      dt: "平均年齢",
      dd: "39.3歳（2022年3月末時点、正社員及び契約社員）",
    },
  ];
  return (
    <div className="mt-[280px] text-center max-md:mt-[160px]">
      <h2 className=" h2-font">Company</h2>
      <CompanySlider />
      <div>
        {Data.map((items, index) => (
          <dl
            key={index}
            className=" w-[50%] mx-auto text-left grid grid-cols-2 grid-rows-2 max-md:block max-md:w-[90%] max-md:py-2">
            <dt className="mr-5 max-md:m-0">{items.dt}</dt>
            <dd className="pl-4">{items.dd}</dd>
          </dl>
        ))}
      </div>
    </div>
  );
}

export default CompanyData;
