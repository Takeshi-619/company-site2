import React from "react";

function Concept() {
  return (
    <div>
      <h2 className="h2-font text-center mt-[150px] max-md:mt-[100px]">
        Concept
      </h2>
      <div className="w-[40%] concept-border mx-auto mt-6 max-md:w-[80%]">
        <p className=" pt-8 pb-4 px-8">
          今回、オフィスをリニューアルした経緯はコロナ禍でこれまで出社の際に行われていた雑談や偶発的なコミュニケーションが減少したため、社員はチームごとに合宿や東京本社への出張などを通して、コミュニケーションを図ってきました。
        </p>
        <p className="pt-4 pb-8 px-8">
          さらに、社員間のコミュニケーションやアイデア創出の場として、集まってコミュニケーションをとれるオフィスは継続して必要と判断し、新しい働き方に合わせたオフィスにリニューアルすることにしました。
        </p>
      </div>
    </div>
  );
}

export default Concept;
