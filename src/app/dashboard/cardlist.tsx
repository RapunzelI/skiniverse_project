import React from "react";
import CardDash from "./card";
import { FaShoppingBasket } from "react-icons/fa";
import { CgGirl } from "react-icons/cg";
import { IoLayers } from "react-icons/io5";
import { HiTableCells } from "react-icons/hi2";
import { AiFillExperiment } from "react-icons/ai";
import { BiSolidVial } from "react-icons/bi";


const brands = [
    { title: "ประเภทผิว", name: "SkinType", icon: <CgGirl /> },
    { title: "ขั้นตอนลงสกินแคร์", name: "Core Routine", icon: <IoLayers /> },
    { title: "ตารางการลงสกินแคร์", name: "Skin Cycling", icon: <HiTableCells /> },
    { title: "ปัญหาสิวเฉพาะจุด", name: "Treatment", icon: <BiSolidVial /> },
    { title: "สกินแคร์ที่เหมาะกับวัยนั้นๆ", name: "Skincare By Age", icon: <AiFillExperiment /> },
    { title: "การเลือกซื้อ", name: "Shopping Guide", icon: <FaShoppingBasket /> },
    { title: "Test", name: "1", icon: <CgGirl /> },
    { title: "Test", name: "2", icon: <IoLayers /> },
    { title: "Test", name: "3", icon: <HiTableCells /> },
    { title: "Test", name: "4", icon: <BiSolidVial /> },
    { title: "Test", name: "5", icon: <AiFillExperiment /> },
    { title: "Test", name: "6", icon: <FaShoppingBasket /> },
];

const CardList: React.FC = () => {
    return (
        <div className="cardContainer">
            {brands.map((brand, index) => (
                <CardDash key={index} icon={brand.icon} name={brand.name} title={brand.title} />
            ))}
        </div>
    );
};

export default CardList;
