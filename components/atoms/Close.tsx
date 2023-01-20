import React from "react";
import Link from "next/link";

function Close({ url }: { url: string | object }) {
  return (
    <div className="btn w-32 mx-auto">
      <Link href={url} legacyBehavior>
        <a>
          <div className="text-center  py-1 px-2 btn-text">Close</div>
        </a>
      </Link>
    </div>
  );
}

export default Close;
