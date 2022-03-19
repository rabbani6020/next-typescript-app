import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Next Js User login</title>
      </Head>
      <div className="flex items-center justify-center mt-20">
        <h1>
          Next Js User login
          <span className="underline decoration-emerald-400">App</span>
        </h1>
      </div>
    </>
  );
};

export default Home;
