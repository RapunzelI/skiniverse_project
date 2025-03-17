"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Intro from "./Intro";

import { TbAlertCircle } from "react-icons/tb"; // Adjust the path if necessary
import { PiFacebookLogoBold } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


export default function About() {
    return(
        <div>
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
    </div>
    )
}