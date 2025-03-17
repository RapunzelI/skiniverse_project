"use client";


import { motion } from "framer-motion";
import Image from "next/image";


import { TbAlertCircle } from "react-icons/tb"; // Adjust the path if necessary
import { PiFacebookLogoBold } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Main() {
return(
    <div>
    <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0 } }}
          className="main md:h-[90vh] flex items-center overflow-hidden"
        >
          <div className="container mx-auto flex flex-col xl:flex-row items-center h-full">
            {/* Text Section */}
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 50, transition: { delay: 0.2, duration: 1.5, ease: "easeInOut" } }}
              className="w-full text-center xl:text-left xl:w-[500px] pt-[70px] px-8 xl:mr-auto xl:ml-[150px] xl:mb-[200px] mb-10">
              <h1 className="intro text-6xl xl:text-7xl leading-tight">
                เริ่มต้น <br /> การดูแลผิว
              </h1>
            </motion.div>

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, bottom: "-100%" }}
              animate={{ opacity: 1, bottom: 0, transition: { delay: 0.4, duration: 1.5, ease: "easeInOut" } }}
              className="flex-1 relative flex justify-center xl:justify-end w-full "
            >
              {/* แสดงภาพในมือถือและ iPad */}
              <div className="block xl:hidden mt-6 ml-4 xl:mt-2 w-96 h-96 relative">
                <Image src="/Assent1.png" layout="fill" objectFit="contain" quality={100} alt="Skin Care Image" />
              </div>

              {/* แสดงภาพแบบเดิมในเดสก์ท็อป */}
              <div className="hidden xl:block absolute bottom-0 right-12 translate-y-100">
                <Image src="/Assent1.png" width={864} height={650} quality={100} alt="Skin Care Image" />
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>
)
}