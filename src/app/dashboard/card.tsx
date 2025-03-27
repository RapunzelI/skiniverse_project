import React from "react";

interface CardDS {
    icon: React.ReactNode;
    name: string;
    title: string;
    link: string;
}

const CardDash: React.FC<CardDS> = ({title, name, icon, link}) => {
    return(
        <a href={link} className="flex flex-col item-center justify-center p-4 border rounded-lg shadow-md bg-white 
        w-55 h-35 cursor-pointer hover:bg-gray-100">
            {icon} {/* แสดง title ที่มีภาษาอังกฤษและภาษาไทย */}
            {name}    {/* แสดง name ที่แยกบรรทัดกัน */}
        <br/>    {title}
         
        </a>
    )
}
export default CardDash;