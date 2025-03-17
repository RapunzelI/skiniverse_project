


import { motion } from "framer-motion";
import Image from "next/image";
import Ingredient from "./ingredients/page";
//import Intro from "./Intro";
//import Member from "./Member";
import About from "./components/About";
import Main from "./components/Main";
import Dashboard from "./components/Dashboard";
import Member from "./components/Member";


import { TbAlertCircle } from "react-icons/tb"; // Adjust the path if necessary
import { PiFacebookLogoBold } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


//Member

export default function Home() {

  return (
    <>
      <div>
        {/* Motion Section */}
        <Main/>
      </div>

      <div>
      {/* About Section */}
      <About/>
      </div>

      <div>
          {/* Dashboard Section */}
          <Dashboard/>
      </div>


      <div className="py-12 text-center px-10 xl:px-20 ">
        <div className="End">
          <div className="bg-[#f2dfcf] text-black rounded-3xl p-8 hover:scale-105 duration-500 hover:shadow-2xl">
            <p className=" text-4xl max-w-[700px] mx-auto leading-normal "> Good Luck <br/> Everyone!!!</p>
          </div>
        </div>
      </div>

      <div>
      {/*Member section */}
      <Member/>
      </div>
      
    </>
  );
}