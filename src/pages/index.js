import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="w-full h-160 bg-150 bg-top md:bg-cover bg-no-repeat flex flex-col bg-arco relative">
        <h1 className="text-7xl font-semibold text-white drop-shadow-lg mt-64 self-center">GUATEMALA</h1>
        <div className="border border-amber-200 bg-amber-300 hover:bg-amber-200 rounded-full flex text-white font-semibold w-32 h-8 self-center items-center justify-center shadow-md cursor-pointer mt-8">EXPLORE</div>
        <div className="w-full h-40 bottom-0 absolute bg-gradient-to-b from-transparent to-black"></div>
      </div>
      <div className="grid gap-8 grid-cols-2 grid-rows-2 mx-10">
        <div className="-translate-y-16 place-self-center cursor-pointer flex flex-col hover:saturate-150 text-white hover:text-amber-50">
          <div className=" rounded-full h-24 w-24  bg-antigua-square bg-cover self-center "></div>
          <p className="text-md text-center">Sample text 1</p>
          <p className="text-3xl text-center">La Antigua</p>
        </div>
        <div className="-translate-y-16 place-self-center cursor-pointer flex flex-col hover:saturate-150 text-white hover:text-amber-50">
          <div className=" rounded-full h-24 w-24  bg-lago-square bg-cover self-center "></div>
          <p className="text-md text-center">Sample text 1</p>
          <p className="text-3xl text-center">El Lago</p>
        </div>
        <div className="-translate-y-10 place-self-center cursor-pointer flex flex-col hover:saturate-150 text-white hover:text-amber-50">
          <div className=" rounded-full h-24 w-24  bg-tikal-square bg-cover self-center "></div>
          <p className="text-md text-center">Sample text 1</p>
          <p className="text-3xl text-center">Tikal</p>
        </div>
        <div className="-translate-y-10 place-self-center cursor-pointer flex flex-col hover:saturate-150 text-white hover:text-amber-50">
          <div className=" rounded-full h-24 w-24  bg-semuc-square bg-cover self-center "></div>
          <p className="text-md text-center">Sample text 1</p>
          <p className="text-3xl text-center">Semuc</p>
        </div>
        
      </div>
      <div className=" mt-20 mx-10">
        <h1 className="text-amber-50 text-2xl font-semibold mb-5 text-center">Guatemalan Culture</h1>
        <p className="text-amber-50 text-md mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum cumque est reiciendis et culpa tempore pariatur, magnam ducimus cupiditate, quas ea cum libero unde! Accusantium delectus quae quam commodi corporis.</p>
        <p className="text-amber-50 text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum cumque est reiciendis et culpa tempore pariatur, magnam ducimus cupiditate, quas ea cum libero unde! Accusantium delectus quae quam commodi corporis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto cumque ratione architecto quidem totam repellat deleniti iste corporis, distinctio aliquid, consequuntur est fugiat omnis dolorem labore, ad expedita quod laborum?</p>
      </div>
    </>
  );
}
