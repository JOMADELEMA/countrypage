import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { IconMenu2 } from "@tabler/icons-react";
import Sidebar from "@components/Sidebar";
import Navbar from "@components/Navbar";
import { useStateContext } from "@contexts/ContextProvider";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { sidebarVisible, toggleSidebar } = useStateContext();

  return (
    <>
      <div className="w-full h-160 xl:h-224 bg-150 bg-top md:bg-cover xl:bg-arco-xl xl:bg-cover xl:-bg-top-1 bg-no-repeat flex flex-col bg-arco relative">
        <Sidebar />
        <Navbar />
        <IconMenu2
          onClick={() => toggleSidebar(sidebarVisible)}
          size={48}
          color="white"
          className="ml-5 mt-5 absolute cursor-pointer lg:hidden"
        />
        <h1 className="text-7xl md:text-8xl lg:text-11xl xl:text-12xl font-semibold text-white drop-shadow-lg mt-64 md:mt-52 lg:mt-40 xl:mt-52 self-center">
          GUATEMALA
        </h1>
        <div className="lg:hidden border border-amber-200 bg-amber-300 hover:bg-amber-200 rounded-full flex text-gray font-semibold w-32 h-8 self-center items-center justify-center shadow-md cursor-pointer mt-8">
          EXPLORE
        </div>
        <div className="w-full h-40 xl:-translate-y-24 2xl:-translate-y-10 bottom-0 absolute bg-gradient-to-b from-transparent to-black"></div>
      </div>
      <div className="grid gap-8 grid-cols-2 grid-rows-2 lg:flex lg:justify-around mx-10 xl:h-52 xl:-translate-y-28">
        <div className="-translate-y-16 xl:-translate-y-0 place-self-center cursor-pointer flex flex-col xl:flex-row saturate-50 hover:saturate-150 text-white hover:text-amber-50 hover:font-semibold">
          <div className=" rounded-full h-24 w-24 xl:h-28 xl:w-28  bg-antigua-square bg-cover self-center"></div>
          <div className="flex flex-col justify-center w-52 pl-5">
            <p className="text-md xl:text-lg text-center xl:text-left">
              Sample text 1
            </p>
            <p className="text-3xl xl:text-4xl xl:text-left text-center">
              La Antigua
            </p>
          </div>
        </div>
        <div className="-translate-y-16 xl:-translate-y-0 place-self-center cursor-pointer flex flex-col xl:flex-row saturate-50 hover:saturate-150 text-white hover:text-amber-50 hover:font-semibold">
          <div className=" rounded-full h-24 w-24 xl:h-28 xl:w-28  bg-lago-square bg-cover self-center"></div>
          <div className="flex flex-col justify-center w-52 pl-5">
            <p className="text-md xl:text-lg text-center xl:text-left">
              Sample text 1
            </p>
            <p className="text-3xl xl:text-4xl xl:text-left text-center">
              El Lago
            </p>
          </div>
        </div>
        <div className="-translate-y-10 lg:-translate-y-16 xl:-translate-y-0 place-self-center cursor-pointer flex flex-col xl:flex-row saturate-50 hover:saturate-150 text-white hover:text-amber-50 hover:font-semibold">
          <div className="rounded-full h-24 w-24  xl:h-28 xl:w-28 bg-tikal-square bg-cover self-center"></div>
          <div className="flex flex-col justify-center w-52 pl-5">
            <p className="text-md xl:text-lg text-center xl:text-left">
              Sample text 1
            </p>
            <p className="text-3xl xl:text-4xl xl:text-left text-center">
              Tikal
            </p>
          </div>
        </div>
        <div className="-translate-y-10 lg:-translate-y-16 xl:-translate-y-0 place-self-center cursor-pointer flex flex-col xl:flex-row saturate-50 hover:saturate-150 text-white hover:text-amber-50 hover:font-semibold ">
          <div className=" rounded-full h-24 w-24 xl:h-28 xl:w-28  bg-semuc-square bg-cover self-center"></div>
          <div className="flex flex-col justify-center w-52 pl-5">
            <p className="text-md xl:text-lg text-center xl:text-left">
              Sample text 1
            </p>
            <p className="text-3xl xl:text-4xl xl:text-left text-center">
              Semuc
            </p>
          </div>
        </div>
      </div>
      <div className="lg:flex lg:flex-row-reverse lg:justify-between ">
        <div
          className=" mt-20 mx-10 flex flex-col lg:w-160 xl:w-1/2 "
          id="guatemalan-culture"
        >
          <h1 className="text-amber-50 text-2xl xl:text-5xl font-semibold mb-5 text-center">
            Guatemalan Culture
          </h1>
          <p className="text-amber-50 text-md mb-5 lg:text-lg xl:text-xl px-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            cumque est reiciendis et culpa tempore pariatur, magnam ducimus
            cupiditate, quas ea cum libero unde! Accusantium delectus quae quam
            commodi corporis.
          </p>
          <p className="text-amber-50 text-md lg:text-lg xl:text-xl px-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            cumque est reiciendis et culpa tempore pariatur, magnam ducimus
            cupiditate, quas ea cum libero unde! Accusantium delectus quae quam
            commodi corporis. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Iusto cumque ratione architecto quidem totam
            repellat deleniti iste corporis, distinctio aliquid, consequuntur
            est fugiat omnis dolorem labore, ad expedita quod laborum?
          </p>

          <div className="border border-amber-200 bg-amber-300 hover:bg-amber-200 rounded-full flex text-gray font-semibold w-32 h-8 xl:w-36 xl:h-10 xl:text-xl self-center items-center justify-center shadow-md cursor-pointer mt-8">
            Learn more
          </div>
        </div>

        <div className="mt-20 mx-10 flex justify-center lg:w-1/2 place-items-center  xl:w-1/2">
          <div className="relative h-80 w-60 lg:h-128 lg:w-96 xl:h-160 xl:w-128 overflow-hidden">
            <Image
              className=" rounded-lg object-cover"
              src="/images/tikal_square.jpeg"
              fill
              alt=""
            />
          </div>

          <div
            id="slider"
            className="relative flex col ml-5 w-6 lg:h-80 xl:h-96 xl:w-10  place-items-center xl:justify-center"
          >
            <div
              id="slider-base"
              className="h-40 w-1 xl:h-60 xl:w-2 bg-white rounded-full absolute place-center left-2"
            ></div>
            <div
              id="slider-thumb"
              className="h-10 w-4 xl:h-12 xl:w-5 bg-amber-300 rounded-full cursor-pointer absolute left-0.5"
            ></div>
          </div>
        </div>
      </div>
      <div className="h-10 xl:h-16 mt-10 text-white flex flex-col justify-center place-items-center">
        <p className="text-sm font-light">&copy; JOMADELEMA | 2023</p>
      </div>
    </>
  );
}
