"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Ingredient from "./ingredients/page";
import Intro from "./Intro";


export default function Home() {
  return (
    <>
    <div>
      {/* Motion Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0 } }}
        className="main md:h-[88.32vh] flex items-center overflow-hidden"
      >
        <div className="container mx-auto flex flex-col xl:flex-row items-center h-full">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 50, transition: { delay: 1.2, duration: 1, ease: "easeInOut" } }}
            className="w-full text-center xl:text-left xl:w-[500px] pt-[70px] px-8 xl:mr-auto xl:ml-[150px] xl:mb-[200px] mb-10"
          >
            <h1 className="intro text-6xl xl:text-7xl leading-tight">
              เริ่มต้น <br /> การดูแลผิว
            </h1>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, bottom: "-100%" }}
            animate={{ opacity: 1, bottom: 0, transition: { delay: 1.4, duration: 1.2, ease: "easeInOut" } }}
            className="flex-1 relative flex justify-center xl:justify-end w-full"
          >
            {/* แสดงภาพในมือถือและ iPad */}
            <div className="block xl:hidden mt-6 xl:mt-2 w-96 h-96 relative">
              <Image src="/Assent.png" layout="fill" objectFit="contain" quality={100} alt="Skin Care Image" />
            </div>

            {/* แสดงภาพแบบเดิมในเดสก์ท็อป */}
            <div className="hidden xl:block absolute bottom-0 right-0 translate-y-72">
              <Image src="/Assent.png" width={864} height={650} quality={100} alt="Skin Care Image" />
            </div>
          </motion.div>
        </div>
      </motion.section>
  </div>


        {/* About Section */}
        
          <div className="flex flex-col items-center min-h-[70vh] py-10">
            {/* Header text */}
            <h2 className="adout text-5xl font-semibold text-center mt-8 ">เกี่ยวกับเว็บไซต์</h2>

              {/* ใช้ grid แทน flex และปรับขนาด card ใน mobile view */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14 mt-20 mb-34 ">
                
                  {/* ปรับขนาด card */}
                  <Intro
                    image="card1.png"
                    title="Beautiful Landscape"
                    description="Discover the beauty of nature with this stunning view."
                  />
                  {/* ปรับขนาด card */}
                  <Intro
                    image="card2.png"
                    title="Beautiful Landscape"
                    description="Discover the beauty of nature with this stunning view."
                  />
                  {/* ปรับขนาด card */}
                  <Intro
                    image="card3.png"
                    title="Beautiful Landscape"
                    description="Discover the beauty of nature with this stunning view."
                  />
              </div>

          </div>
        


        <div>

        </div>



    </>
  );
}
