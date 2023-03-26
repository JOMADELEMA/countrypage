import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { IconMenu2 } from "@tabler/icons-react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>


      <div className="w-full h-160 bg-150 bg-top md:bg-cover bg-no-repeat flex flex-col bg-arco relative">
      <IconMenu2 size={48} color="white" className="ml-5 mt-5 absolute cursor-pointer"/>
        <h1 className="text-7xl font-semibold text-white drop-shadow-lg mt-64 self-center">GUATEMALA</h1>
        <div className="border border-amber-200 bg-amber-300 hover:bg-amber-200 rounded-full flex text-gray font-semibold w-32 h-8 self-center items-center justify-center shadow-md cursor-pointer mt-8">EXPLORE</div>
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
      <div className=" mt-20 mx-10 flex flex-col" id="guatemalan-culture">
        <h1 className="text-amber-50 text-2xl font-semibold mb-5 text-center">Guatemalan Culture</h1>
        <p className="text-amber-50 text-md mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum cumque est reiciendis 
        et culpa tempore pariatur, magnam ducimus cupiditate, quas ea cum libero unde! Accusantium delectus quae quam commodi corporis.</p>
        <p className="text-amber-50 text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum cumque est reiciendis et culpa tempore pariatur, 
        magnam ducimus cupiditate, quas ea cum libero unde! Accusantium delectus quae quam commodi corporis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto cumque ratione architecto 
        quidem totam repellat deleniti iste corporis, distinctio aliquid, consequuntur est fugiat omnis dolorem labore, ad expedita quod laborum?</p>

        <div className="border border-amber-200 bg-amber-300 hover:bg-amber-200 rounded-full flex text-gray font-semibold w-32 h-8 self-center items-center justify-center shadow-md cursor-pointer mt-8">Learn more</div>
      </div>

      <div className="mt-20 mx-10 flex justify-center">
        <div className="relative h-80 w-60 overflow-hidden">
          <Image className=" rounded-lg object-cover" src="/images/tikal_square.jpeg" fill alt=''/>
        </div>
        
        <div id="slider" className="relative flex col ml-5 w-6 place-items-center"> 
          <div id="slider-base" className="h-40 w-1 bg-white rounded-full absolute place-center left-2"></div>
          <div id="slider-thumb" className="h-10 w-4 bg-amber-300 rounded-full cursor-pointer absolute left-0.5"></div>
        </div>

      </div>
      <div className="h-10 mt-10 text-white flex flex-col justify-center place-items-center">
        <p className="text-sm font-light">&copy; JOMADELEMA | 2023</p>
      </div>
    </>
  );
}
