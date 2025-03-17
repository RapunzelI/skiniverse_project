import React from "react";

interface CardDS {
    icon: React.ReactNode;
    name: string;
    title: string;
}

const CardDash: React.FC<CardDS> = ({title, name, icon}) => {
    return(
        <div className="flex flex-col item-center justify-center p-4 border rounded-lg shadow-md bg-white 
        w-55 h-35 cursor-pointer hover:bg-gray-100">
            <div>{icon}</div> {/* แสดง title ที่มีภาษาอังกฤษและภาษาไทย */}
            <p>{name}</p>     {/* แสดง name ที่แยกบรรทัดกัน */}
            <h2>{title}</h2>
        </div>
    )
}
export default CardDash;