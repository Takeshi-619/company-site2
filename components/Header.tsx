import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const tailstyle = "border-b-2 border-green-800 border-solid rounded-b-sm";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const menuFunction = () => {
    setOpenMenu(!openMenu);
  };

  const router = useRouter();
  console.log(router.asPath);

  return (
    <header className="sticky top-0 z-50 h-16 items-center flex justify-between border border-solid base-color drop-shadow-md">
      <div>
        <Link href={"/"}>
          <Image
            src={`/logo_kddi.png`}
            alt="KDDI Web Comunnicationsのロゴ"
            height={50}
            width={100}
            className="pl-4 w-full max-md:w-[90%]"></Image>
        </Link>
      </div>
      <ul className="w-1/2 flex justify-around items-center max-md:hidden">
        <li className={`${router.asPath === "/" ? tailstyle : ""}`}>
          <Link
            href={"/"}
            className="text-base max-md:text-sm"
            // onClick={(e) => {
            //   clickHandle(e);
            // }}>
          >
            Top
          </Link>
        </li>
        <li className={`${router.asPath === "/office" ? tailstyle : ""}`}>
          <Link href={"/office"} className="text-base max-md:text-sm">
            Office
          </Link>
        </li>
        <li className={`${router.asPath === "/company" ? tailstyle : ""}`}>
          <Link href={"/company"} className="text-base max-md:text-sm">
            Company
          </Link>
        </li>
        <li>
          <Link
            href={"https://hrmos.co/pages/kddiwebc/jobs"}
            rel="noopener noreferrer"
            target="_blank">
            <div className="text-base max-md:text-sm">Entry</div>
          </Link>
        </li>
      </ul>
      <div
        onClick={() => menuFunction()}
        className="hidden max-md:flex h-10 w-10 mr-4 justify-center gap-2 items-center flex-col relative z-50">
        <span
          className={`${
            openMenu ? "absolute inset-0 m-auto rotate-45" : ""
          } h-[2px] w-full bg-black transition-all`}></span>
        <span
          className={`${
            openMenu ? "opacity-0" : ""
          } h-[2px] w-full bg-black transition-all`}></span>
        <span
          className={`${
            openMenu ? "absolute inset-0 m-auto -rotate-45" : ""
          } h-[2px] w-full bg-black transition-all`}></span>
      </div>
      <ul
        className={`${
          openMenu ? "flex" : "hidden"
        } fixed top-0 left-0 h-screen w-screen base-color flex-col justify-center items-center gap-8`}>
        <li className={`${router.asPath === "/" ? tailstyle : ""}`}>
          <Link href={"/"} className="text-base max-md:text-xl">
            Top
          </Link>
        </li>
        <li className={`${router.asPath === "/office" ? tailstyle : ""}`}>
          <Link href={"/office"} className="text-base max-md:text-xl">
            Office
          </Link>
        </li>
        <li className={`${router.asPath === "/company" ? tailstyle : ""}`}>
          <Link href={"/company"} className="text-base max-md:text-xl">
            Company
          </Link>
        </li>
        <li>
          <Link
            href={"https://hrmos.co/pages/kddiwebc/jobs"}
            rel="noopener noreferrer"
            target="_blank">
            <div className="text-base max-md:text-xl">Entry</div>
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
