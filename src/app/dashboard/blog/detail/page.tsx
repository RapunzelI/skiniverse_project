"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { IoMdArrowRoundBack } from "react-icons/io";
import "./style.css"

export default function WatermelonPage() {
  const router = useRouter(); // ใช้ hook เพื่อย้อนกลับ

  return (
    <div>
    <div className=" bg-gray-100 flex flex-col items-center justify-center p-8">
      {/* ส่วนบน: ภาพและหัวข้อ */}
      <div className="w-full md:w-2/3 flex flex-col md:flex-row items-start gap-6">
      {/* รูปภาพ */}
      <Image
        src="/banner_1.jpg"
        alt="Watermelon"
        width={500}
        height={500}
        className="rounded-lg shadow-md"
      />

      {/* หัวข้อและรายละเอียด */}
      <div className="md:ml-6 sm:mt-4"> 
        <h2 className="text-3xl font-bold">หัวข้อเรื่อง</h2>
        <p className="text-gray-600">รายละเอียด</p>
      </div>
    </div>


      {/* ส่วนล่าง: รายละเอียด */}
      <div className="w-full md:w-2/3 bg-white flex flex-col p-6 mt-6 rounded-lg shadow-lg">

        <h3 className="text-2xl font-semibold mb-4">รายละเอียด</h3>
        <p className="text-gray-700">
          ข้อมูลจากฐานข้อมูลสามารถแสดงในกล่องนี้ โดยสามารถเพิ่มเนื้อหาที่ดึงมาจาก API หรือ Database ได้  
          หากข้อมูลยาวเกินไป กล่องนี้รองรับการเลื่อน (`overflow-auto`) เพื่อให้ใช้งานได้สะดวกขึ้น 
          .
          .
          .
          .
          .<br/>
        </p>
        <p className="mt-4 text-gray-700">
          คุณสามารถเพิ่มตาราง, รายการ, หรือองค์ประกอบ UI อื่นๆ ได้ที่นี่..........................
          ...............................................................................
          <br/>............................................................................
          <br/>....................................................................................
          <br/>..................................................................................
          <br/>.....................................................................................
          <br/>.......................................................................................
          <br/>.....................................................................................
          <br/>......................................................................................
          <br/>.....................................................................................
          <br/>
        </p>
       

      </div>

      {/* ไอคอนย้อนกลับ */} 
      <button
        onClick={() => router.back()}
        className="Back flex items-center gap-2 text-2xl text-black hover:text-[#a087c6] cursor-pointer mt-6 self-start "
      >
        <IoMdArrowRoundBack className="text-2xl" />
        <span>ย้อนกลับ</span>
      </button>
      <div>
       
      </div>
    </div>
    
      </div>
  );
}

