import React from "react";
import Link from "next/link";

function OfficeBtn({ url }: { url: string | object }) {
  return (
    <div className="btn w-40 mx-auto">
      <Link href={url} legacyBehavior>
        <a>
          <div className="text-center py-2 pl-4 pr-8 btn-text view">
            オフィスを見る
          </div>
        </a>
      </Link>
    </div>
  );
}

export default OfficeBtn;
