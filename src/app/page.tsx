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
          className="main md:h-[90vh] flex items-center overflow-hidden"
        >
          <div className="container mx-auto flex flex-col xl:flex-row items-center h-full">
            {/* Text Section */}
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 50, transition: { delay: 1.5, duration: 1.5, ease: "easeInOut" } }}
              className="w-full text-center xl:text-left xl:w-[500px] pt-[70px] px-8 xl:mr-auto xl:ml-[150px] xl:mb-[200px] mb-10"
            >
              <h1 className="intro text-6xl xl:text-7xl leading-tight">
                เริ่มต้น <br /> การดูแลผิว
              </h1>
            </motion.div>

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, bottom: "-100%" }}
              animate={{ opacity: 1, bottom: 0, transition: { delay: 1.8, duration: 1.5, ease: "easeInOut" } }}
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

      {/* About Section */}
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1.5, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="flex flex-col items-center min-h-[70vh] py-10 bg-[#f2f3f4]"
      >
        {/* Header text */}
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="adout text-5xl font-semibold text-center mt-10"
        >
          เกี่ยวกับเว็บไซต์
        </motion.h2>

        {/* ใช้ grid และเพิ่มอนิเมชั่นให้ card เลื่อนขึ้นมาต่อเนื่อง */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14 mt-20 mb-34">
          {["card1.png", "card2.png", "card3.png"].map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.25, duration: 1.5, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              <Intro
                image={image}
                title={index === 0 ? "Compare" : index === 1 ? "Ingredient" : "Products"}
                description={index === 0 ? "1" : index === 1 ? "2." : "3"}
              />
            </motion.div>
          ))}
        </div>
      </motion.section>


      <div>
          {/* test Section */}
          <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.2 }} // แสดงอนิเมชั่นเมื่อ 20% ของ section เข้าสู่ viewport
          className="md:h-[100vh] flex items-center overflow-hidden"
        >
          <div className="container mx-auto flex flex-col xl:flex-row items-center h-full">
            
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className="flex-[0.825] relative flex justify-center xl:justify-start w-full"

            >

              {/* Desktop Image */}
              <div className="hidden xl:block absolute bottom-0 left-10 translate-y-85">
                <Image src="/Assent2.png" width={700} height={600} quality={100} alt="Skin Care Image" />
              </div>
        
            </motion.div>
            {/* Text Section */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 1, ease: "easeInOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className="w-full text-center xl:text-left xl:w-[500px]  px-8 xl:mr-[150px] xl:mr-auto xl:mb-[200px] mb-10"
            >
              <h1 className="intro text-6xl xl:text-7xl leading-tight">
                Test <br /> Test2
              </h1>
              <p>
                  อะไรไม่รู้ใส่ไว้ก่อน ----------------------------------
                  ----------------------------------------------------------------
                  ----------------------------------------------------------------
                  
              </p>

              <button className="mt-5 border-2 border-[#9a77b0] text-[#9a77b0] px-4 py-1.5 rounded-md hover:bg-[#9a77b0] hover:text-white">Link</button>
            </motion.div>

            {/* Mobile & Tablet Image */}
              <div className="block xl:hidden mt-6 xl:mt-2 w-96 h-96 relative">
                <Image src="/Assent2.png" layout="fill" objectFit="contain" quality={100} alt="Skin Care Image" />
              </div>

          </div>
        </motion.section>

      </div>

    </>
  );
}
