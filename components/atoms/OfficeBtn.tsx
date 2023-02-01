import React from "react";
import Link from "next/link";

function OfficeBtn({ url }: { url: string | object }) {
  return (
    <div className="btn mx-auto max-md:top-12">
      <Link href={url} legacyBehavior>
        <a>
          <div className="text-center py-2 pl-6 pr-12 btn-text view">
            オフィスを見る
          </div>
        </a>
      </Link>
    </div>
  );
}

export default OfficeBtn;
