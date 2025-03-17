import React from "react";
import CardDash from "./card";
import { FaTshirt,  FaImage, FaHotjar } from "react-icons/fa";
import { CgGirl } from "react-icons/cg";
import { IoLayers } from "react-icons/io5";
import { HiTableCells } from "react-icons/hi2";
import { FaShoppingBasket } from "react-icons/fa";
import { AiFillExperiment } from "react-icons/ai";
import { BiSolidVial } from "react-icons/bi";

const brands = [
    { title:"ประเภทผิว", name: "SkinType" , icon: <CgGirl /> },
    { title:"ขั้นตอนลงสกินแคร์", name: "Core Routine" , icon: <IoLayers /> },
    { title: "ตารางการลงสกินแคร์", name: "Skin Cycling", icon: <HiTableCells /> },
    { title: "ปัญหาสิวเฉพาะจุด", name: "Treatment", icon: <BiSolidVial /> },
    { title: "สกินแคร์ที่เหมาะกับวัยนั้นๆ", name: "Skincare that your age", icon: <AiFillExperiment /> },
    { title: "การเลือกซื้อ", name: "Shopping Guide", icon: <FaShoppingBasket /> },
  ];
  
  const CardList: React.FC = () => {
    return (
      <div className="flex flex-wrap gap-4 justify-center">
        {brands.map((brand, index) => (
          <CardDash key={index}  icon={brand.icon} name={brand.name}  title={brand.title}/>
        ))}
      </div>
    );
  };
  
  export default CardList;