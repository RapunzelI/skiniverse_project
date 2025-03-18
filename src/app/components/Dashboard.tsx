"use client";


import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Dashboard() {
return(
    <div>
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
              className="w-full text-center xl:text-left xl:w-[500px] px-8 xl:mr-[150px] xl:mr-auto mb-10"
            >
              <h1 className="intro text-6xl xl:text-7xl leading-tight">
                พื้นฐาน <br /> ที่คุณควรรู้
              </h1>
              <p className="introDS mt-[20px]">
                ภาพรวมข้อมูลที่ช่วยให้คุณตัดสินใจได้อย่างมั่นใจคือคลังความรู้ของเรา เราออกแบบคลังความรู้ให้แสดงข้อมูลที่สำคัญและสรุปผลในรูปแบบที่เข้าใจง่าย 
                ช่วยให้คุณสามารถเลือกอ่านและทำความเข้าใจเนื้อหาได้อย่างรวดเร็วและแม่นยำ
              </p>

              <Link href="/dashboard">
                <button
                  className="btnDS mt-5 border-2 border-[#9a77b0] text-[#9a77b0] px-4 py-1.5 rounded-md hover:bg-[#9a77b0] hover:text-white 
                    sm:mx-auto sm:block" // Center button in mobile view
                  suppressHydrationWarning
                >
                  คลังความรู้
                </button>
              </Link>
            </motion.div>

          </div>
        </motion.section>
        </div>
)
}