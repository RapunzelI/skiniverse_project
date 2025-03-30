"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import "./style.css";

const ProductPage: React.FC = () => {
  const [productSearchTerm, setProductSearchTerm] = useState("");

  return (
    <div className="Dt bg-gray-100 flex flex-col items-center min-h-screen p-8">      
      {/* ส่วนที่มีรูปภาพและเนื้อหาผลิตภัณฑ์ */}
      <div className="container w-full md:w-2/3 flex flex-col md:flex-row items-center gap-6 mt-2">
        {/* รูปภาพ */}
        <Image
          src="https://imageforskiniverse.s3.ap-southeast-1.amazonaws.com/17242326828950.jpg"
          alt="Product"
          width={400}
          height={400}
          className="w-80 h-90 rounded-lg shadow-md bg-white"
        />

        {/* เนื้อหาด้านขวา */}
        <div className="container flex flex-col w-full md:w-1/2 min-h-[150px] mt-2 md:mt-0">
          {/* กล่องรอบชื่อผลิตภัณฑ์ */}
          <div className="w-full p-4 bg-white rounded-md shadow-md mb-2">
            <h2 className="text-3xl font-bold">ชื่อผลิตภัณฑ์</h2>
            <p className="text-gray-600 mt-2">รายละเอียดของผลิตภัณฑ์ที่นี่...</p>
          </div>
        </div>
      </div>

      {/* ส่วนล่าง: รายละเอียดผลิตภัณฑ์ */}
      <div className="container w-full md:w-2/3 bg-white flex flex-col p-6 mt-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold mb-4">รายละเอียดผลิตภัณฑ์</h3>
        <p className="text-gray-700 mb-4">
          บลาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาา
        </p>
        <p className="mt-4 text-gray-700 mb-4">
          คุณสามารถเพิ่มองค์ประกอบ UI อื่นๆ ได้ที่นี่.......................... 
          ..............................................................<br />
          ...........................................................<br />
          ............................................................<br />
        </p>
      </div>

      {/* กล่องด้านล่าง: ข้อมูลเพิ่มเติม */}
      <div className="container w-full md:w-2/3 bg-white flex flex-col p-6 mt-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold mb-4">ข้อมูลเพิ่มเติม</h3>
        <p className="text-gray-700 mb-4">
          นี่คือส่วนของเนื้อหาเพิ่มเติมที่คุณสามารถแสดงในกล่องนี้ได้
        </p>
      </div>
    </div>
  );
};

export default ProductPage;
