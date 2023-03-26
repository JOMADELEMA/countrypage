import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="w-screen h-192 bg-cover bg-center md:bg-cover bg-no-repeat flex flex-col bg-arco relative">
        <h1 className="text-7xl font-semibold text-white drop-shadow-lg mt-64 self-center">GUATEMALA</h1>
        <div className="border border-amber-200 bg-amber-300 rounded-full flex text-white font-semibold w-32 h-8 self-center items-center justify-center shadow-md cursor-pointer mt-8">EXPLORE</div>
        <div className="w-full h-72 bottom-0 absolute bg-gradient-to-b from-transparent to-black"></div>
      </div>
    </>
  );
}
