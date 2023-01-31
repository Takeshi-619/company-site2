import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Service from "../components/company/Service";
import Data from "../components/company/Data";
import CompanyData from "../components/company/CompanyData";

function Company() {
  return (
    <div>
      <Head>
        <title>KDDI Web Comunnications オフィス紹介サイト</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="base-color">
        <h1>
          <div className="com-main w-full max-md:bg-contain max-md:-mt-3 max-md:h-[155px] max-md:bg-bottom max-md:bg-no-repeat"></div>
        </h1>
        <Service />
        <Data />
        <CompanyData />
      </main>
      <Footer />
    </div>
  );
}

export default Company;
