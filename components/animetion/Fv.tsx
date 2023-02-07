import React, { useEffect, useRef, useState } from "react";
import Lottie from "lottie-web";
import ld from "../../src/animationData/animation.json";

import { useRouter } from "next/router";

let lt: any = null;
function Fv() {
  const container = useRef<HTMLDivElement>(null!);

  const router = useRouter();
  useEffect(() => {
    router.events.on("routeChangeComplete", handleChangeRoute);

    return () => {
      router.events.off("routeChangeComplete", handleChangeRoute);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleChangeRoute(path: string) {
    console.log("complete");
    lottieAnime();
  }

  function lottieAnime() {
    lt = Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: ld,
    });
  }
  useEffect(() => {
    if (container.current && !lt) {
      lottieAnime();
    }
  }, []);
  return (
    <div className="relative">
      <div className="h-full w-full" ref={container} id="adsdsd"></div>
      <div className="h1-font my-auto max-md:text-xl z-10 m-auto">
        <span className="span">繋</span>
        <span className="span">が</span>
        <span className="span">る</span>
        <span className="span">イ</span>
        <span className="span">マ</span>
        <br />
        <span className="span">広</span>
        <span className="span">が</span>
        <span className="span">る</span>
        <span className="span">ミ</span>
        <span className="span">ラ</span>
        <span className="span">イ</span>
      </div>
    </div>
  );
}

export default Fv;
