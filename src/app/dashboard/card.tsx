import React from "react";

interface CardDS {
    icon: React.ReactNode;
    name: string;
    title: string;
    link: string;
}

const CardDash: React.FC<CardDS> = ({title, name, icon, link}) => {
    return(
        <a href={link} className="cardmini flex flex-col item-center justify-center p-4 border rounded-lg shadow-md bg-white 
        w-55 h-35 cursor-pointer ">
            <div className="card-icon">{icon}</div> {/* แสดง title ที่มีภาษาอังกฤษและภาษาไทย */}
            <span className="card-name">{name}</span>    {/* แสดง name ที่แยกบรรทัดกัน */}
            <p className="card-title">{title}</p>
         
        </a>
    )
}
export default CardDash;