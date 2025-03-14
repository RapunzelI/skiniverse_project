"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Ingredient from "./ingredients/page";
import Intro from "./Intro";

export default function Home() {
  return (
    <div>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0 } }}
        className="main md:h-[88vh] flex items-center overflow-hidden mb-16"
      >
        <div className="container mx-auto flex flex-col xl:flex-row items-center h-full">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 50, transition: { delay: 1.2, duration: 1, ease: "easeInOut" } }}
            className="w-full text-center xl:text-left xl:w-[500px] pt-[120px] xl:pt-[40px] px-8 xl:mr-auto xl:ml-[150px]"
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

      {/* Card Section with Header */}
        <div className="min-h-screen bg-gradient-to-br mt-24"> {/* เพิ่ม mt-24 ให้ Section นี้เลื่อนลงมา */}
          <div className="flex flex-col items-center min-h-screen p-6">
            {/* Header text */}
            <h2 className="text-3xl font-semibold text-center mb-6">เกี่ยวกับเว็บไซต์</h2>

            <div className="flex justify-center items-center space-x-6">
              <Intro image="card1.png" title="Beautiful Landscape" description="Discover the beauty of nature with this stunning view." />
              <Intro image="card2.png" title="Beautiful Landscape" description="Discover the beauty of nature with this stunning view." />
              <Intro image="card3.png" title="Beautiful Landscape" description="Discover the beauty of nature with this stunning view." />
            </div>
          </div>
        </div>

    </div>
  );
}
