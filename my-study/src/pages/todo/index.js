import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* 일반 리액트 앱에서는 Helmet 사용 */}
      {/* <Helmet>
        <title>투두 앱 만들기</title>
      </Helmet> */}

      {/* Next 앱에서는 Head 기본 내장 사용법 비슷 */}
      <Head>
        <title>투두 앱 만들기</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
}