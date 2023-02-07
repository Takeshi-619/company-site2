import React from "react";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <>
      <hr />
      <div className="bg relative">
        <ul className="w-3/4 max-md:w-[80%] max-md:pl-0 mx-auto flex flex-col pl-20">
          <li className="mt-14 mb-7 text-2xl font-bold max-md:text-lg">
            <Link href={"/"}>Top</Link>
          </li>
          <li className="my-7 text-2xl font-bold max-md:text-lg">
            <Link href={"/office"}>Office</Link>
          </li>
          <li className="my-7 text-2xl font-bold max-md:text-lg">
            <Link href={"/company"}>Company</Link>
          </li>
          <li className="mt-7 mb-14 text-2xl font-bold max-md:text-lg">
            <Link
              href={"https://hrmos.co/pages/kddiwebc/jobs"}
              rel="noopener noreferrer"
              target="_blank">
              Entry
            </Link>
          </li>
        </ul>
        <Link href={"/"}>
          <Image
            src={`/logo_kddi.png`}
            alt="KDDI Web Comunnicationsのロゴ"
            height={50}
            width={100}
            className="w-[10%] max-md:w-[30%] absolute bottom-[10%] right-[20%] max-md:right-[10%]"></Image>
        </Link>
        <p className="text-center">
          <small>
            &copy; 2023 KDDI Web Communications Special Office site.
          </small>
        </p>
      </div>
    </>
  );
}

export default Footer;
