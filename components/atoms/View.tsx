import React from "react";
import Link from "next/link";

function View({ url }: { url: string | object }) {
  return (
    <div className="btn w-32 mx-auto">
      <Link href={url} legacyBehavior>
        <a>
          <div className="text-center  py-1 pl-2 pr-6 btn-text view">
            View More
          </div>
        </a>
      </Link>
    </div>
  );
}

export default View;
