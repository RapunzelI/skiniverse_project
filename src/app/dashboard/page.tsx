"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import SlideShow from "./silde";
import CardList from "./cardlist" // นำเข้า SlideShow คอมโพเนนต์
import "./style.css";  // Import CSS ปกติ


const Dashboard: React.FC = () => {
  return (
    <>
        <div className="slideShowContainer">
            <SlideShow />
        </div>
        <div className="containerSkin flex justify-center items-center">
            <h1 className="titleSkin text-center">Dashboard</h1>
            
            
        </div>

        <div>
            <CardList/>
        </div>
    </>
  );
};

export default Dashboard;
