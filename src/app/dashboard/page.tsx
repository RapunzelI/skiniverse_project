"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import SlideShow from "./silde";
import CardList from "./cardlist" // นำเข้า SlideShow คอมโพเนนต์
import "./styleds.css";  // Import CSS ปกติ
import Link from "next/link";

const Dashboard: React.FC = () => {
  return (
    <>
        <div className="slideShowContainer">
            <SlideShow />
        </div>
        
        <div className="containerSkin flex justify-center items-center">
            <h1 className="titleSkin text-center text-5xl mt-20 mb-20">คลังความรู้</h1>
        </div>

        <div className="w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[600px]">
            <CardList />
        </div>

        <div>
          <Link href="/detail">
            <button className="mb-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
           ไปที่หน้ารายละเอียด
          </button>
          </Link>
        </div>
        
    </>
  );
};

export default Dashboard;
