import React from "react";
import CardDash from "./card";
import { FaShoppingBasket } from "react-icons/fa";
import { CgGirl } from "react-icons/cg";
import { IoLayers } from "react-icons/io5";
import { HiTableCells } from "react-icons/hi2";
import { AiFillExperiment } from "react-icons/ai";
import { BiSolidVial } from "react-icons/bi";


const brands = [
    { title: "กดอันนี้นะบิ๊ก", name: "SkinType", icon: <CgGirl /> ,link: "/knowledge/blog"},
    { title: "ขั้นตอนลงสกินแคร์", name: "Core Routine", icon: <IoLayers /> ,link: "/"},
    { title: "ตารางการลงสกินแคร์", name: "Skin Cycling", icon: <HiTableCells /> ,link: "/"},
    { title: "ปัญหาสิวเฉพาะจุด", name: "Treatment", icon: <BiSolidVial /> ,link: "/"},
    { title: "สกินแคร์ที่เหมาะกับวัยนั้นๆ", name: "Skincare By Age", icon: <AiFillExperiment /> ,link: "/"},
    { title: "การเลือกซื้อ", name: "Shopping Guide", icon: <FaShoppingBasket /> ,link: "/"},
    { title: "Test", name: "1", icon: <CgGirl /> ,link: "/"},
    { title: "Test", name: "2", icon: <IoLayers /> ,link: "/"},
    { title: "Test", name: "3", icon: <HiTableCells /> ,link: "/"},
    { title: "Test", name: "4", icon: <BiSolidVial /> ,link: "/"},
    { title: "Test", name: "5", icon: <AiFillExperiment /> ,link: "/"},
    { title: "Test", name: "6", icon: <FaShoppingBasket /> ,link: "/"},
];

const CardList: React.FC = () => {
    return (
        <div className="cardContainer">
            {brands.map((brand, index) => (
                <CardDash key={index} icon={brand.icon} name={brand.name} title={brand.title} link={brand.link}/>
            ))}
        </div>
    );
};

export default CardList;
