"use client";


import { motion } from "framer-motion";
import Image from "next/image";
import Ingredient from "./ingredients/page";
import Intro from "./Intro";
import Member from "./Member";

import { TbAlertCircle } from "react-icons/tb"; // Adjust the path if necessary
import { PiFacebookLogoBold } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const members = [
  {
    name: "พิมพ์ชนก เลิศลาภกาญจนกุล",
    profession: "สถานะ : เป็นบ้า",
    img: "/Kik.png",
    infoName: "พิมพ์ชนก เลิศลาภกาญจนกุล",
    infoProfession: "เรียนแบบจดจำ แล้วนำไปทิ้ง",
    infoLocation: "Bangkok - Thailand",
  },
  {
    name: "ศักดิธัช ปรากฎหาญ",
    profession: "สถานะ : เครียดลงกระเพาะ",
    img: "/Big.png",
    infoName: "ศักดิธัช ปรากฎหาญ",
    infoProfession: "My code is compiling, but my sanity isn’t.",
    infoLocation: "Bangkok - Thailand",
  },
  {
    name: "สุพิชฌาย์ เลิศพัฒนศักดิ์",
    profession: "สถานะ : ไม่มีสมอง",
    img: "/Net.png",
    infoName: "สุพิชฌาย์ เลิศพัฒนศักดิ์",
    infoProfession: "ห้ะ?",
    infoLocation: "Bangkok - Thailand",
  },
];

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
              animate={{ opacity: 1, y: 50, transition: { delay: 0.2, duration: 1.5, ease: "easeInOut" } }}
              className="w-full text-center xl:text-left xl:w-[500px] pt-[70px] px-8 xl:mr-auto xl:ml-[150px] xl:mb-[200px] mb-10"
            >
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

      {/* About Section */}
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.2, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="flex flex-col items-center min-h-[70vh] py-10 bg-[#f2f3f4]"
      >
        {/* Header text */}
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="adout text-5xl text-center mt-10"
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
                description={index === 0 ? "ในการตัดสินใจเลือกสิ่งที่ดีที่สุด เราจำเป็นต้องเปรียบเทียบข้อมูลอย่างละเอียด เพื่อให้เห็นถึงความแตกต่างและข้อดีข้อเสียของแต่ละตัวเลือก การเปรียบเทียบช่วยให้เราสามารถวิเคราะห์และประเมินค่าได้อย่างแม่นยำ ทำให้เราสามารถเลือกสิ่งที่เหมาะสมที่สุดกับความต้องการของเราได้" 
                  : index === 1 ? "องค์ประกอบที่ลงตัวจะนำไปสู่ผลลัพธ์ที่ยอดเยี่ยม และส่วนผสมคือสิ่งสำคัญที่สุดในการสร้างสรรค์สิ่งต่างๆ การเลือกใช้ส่วนผสมที่มีคุณภาพและสัดส่วนที่เหมาะสมจะทำให้ได้ผลลัพธ์ที่น่าพึงพอใจ" 
                  : "ผลลัพธ์ของความมุ่งมั่นและความใส่ใจในทุกรายละเอียดคือผลิตภัณฑ์ เรามุ่งมั่นที่จะแนะนำผลิตภัณฑ์ที่มีคุณภาพและตอบโจทย์ความต้องการของผู้บริโภค"}
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
          transition={{ duration: 0.2, ease: "easeInOut" }}
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
              {/* Mobile & Tablet Image */}
              <div className="block xl:hidden mt-6 xl:mt-2 w-96 h-96 relative">
                <Image src="/Assent2.png" layout="fill" objectFit="contain" quality={100} alt="Skin Care Image" />
              </div>

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
              className="w-full text-center xl:text-left xl:w-[500px]  px-8 xl:mr-[150px] xl:mr-auto mb-10"
            >
              <h1 className="intro text-6xl xl:text-7xl leading-tight">
                พื้นฐาน <br /> ที่คุณควรรู้
              </h1>
              <p className="mt-[20px]">
              ภาพรวมข้อมูลที่ช่วยให้คุณตัดสินใจได้อย่างมั่นใจคือแดชบอร์ดของเรา เราออกแบบแดชบอร์ดให้แสดงผลข้อมูลที่สำคัญและสรุปผลในรูปแบบที่เข้าใจง่าย ช่วยให้คุณสามารถติดตามและวิเคราะห์ข้อมูลได้อย่างรวดเร็วและแม่นยำ
                  
              </p>

              <button className="mt-5 border-2 border-[#9a77b0] text-[#9a77b0] px-4 py-1.5 rounded-md hover:bg-[#9a77b0] hover:text-white">Dashboard</button>
            </motion.div>
          </div>
        </motion.section>

      </div>

      <div className="py-12 text-center px-10 xl:px-20 ">
        <div className="End">
          <div className="bg-[#f2dfcf] text-black rounded-3xl p-8 hover:scale-105 duration-500 hover:shadow-2xl">
            <p className=" text-4xl max-w-[700px] mx-auto leading-normal "> Good Luck <br/> Everyone!!!</p>
          </div>
        </div>
      </div>

      <div className="py-12 text-center px-10 xl:px-20 bg-[#f2f3f4]">
        {/* Header animation */}
        <motion.h1
          className="Member text-5xl mb-10 md:mb-[0px] md:mt-[50px]"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          viewport={{ once: true }}
        >
          สมาชิก
        </motion.h1>

        {/* Member Cards */}
        <motion.div
          className="containermember grid grid-cols-1 md:grid-cols-3 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
          }}
        >
          {members.map((member, index) => (
            <motion.div
              key={index}
              className="cardmb md:mb-[100px] md:mt-[100px] mb-[20px]"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4 + index * 0.2, // Adds staggered delay for each card
                duration: 1,
              }}
              viewport={{ once: true }}
            >
              <div className="cardmb__border">
                <div className="cardmb__perfil">
                  <img src={member.img} alt="card image" className="cardmb__img" />
                </div>
              </div>
              <h3 className="cardmb__name">{member.name}</h3>
              <span className="cardmb__profession">{member.profession}</span>

              {/* Card info */}
              <div className="info">
                <div className="info__icon">
                  <TbAlertCircle />
                  <i className="ri-information-line"></i>
                </div>

                <div className="info__border">
                  <div className="info__perfil">
                    <img src={member.img} alt="card image" className="info__img" />
                  </div>
                </div>

                <div className="info__data">
                  <h3 className="info__name">{member.infoName}</h3>
                  <span className="info__profession">{member.infoProfession}</span>
                  <span className="info__location">{member.infoLocation}</span>
                </div>

                <div className="info__social">
                  <a href="https://www.linkedin.com/" target="_blank" className="info__social-link">
                    <span className="info__social-icon">
                      <PiFacebookLogoBold />
                    </span>
                  </a>

                  <a href="https://dribbble.com/" target="_blank" className="info__social-link">
                    <span className="info__social-icon">
                      <FaInstagram />
                    </span>
                  </a>

                  <a href="https://github.com/" target="_blank" className="info__social-link">
                    <span className="info__social-icon">
                      <FaXTwitter />
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

    </>
  );
}