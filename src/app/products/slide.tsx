import React from "react";
import Image from "next/image";

interface propsType {
    img: string;
    title: string;
    mainTitle: string;
}

const slide: React.FC<propsType> = ({ img, title, mainTitle }) => {
    return (
        <div className="outline-none border-none relative">
            <div className="absolute left-[30px] md:left-[70px] max-w-[250px] sm:max-w-[350px] top-[50%] -translate-y-[50%] 
            space-y-2 lg:space-y-4 bg-[#ffffffa2] sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none">
                <h3 className="text-accent text-[24px] lg:text-[28px]">{title}</h3>
                <h2 className="text-blackish text-[26px] md:text-[30px] lg:text-[44px] font-bold leading [1.2]">
                    {mainTitle}
                </h2>
            </div>
            <Image 
                className="w-[100%] h-[125px] md:h-auto rounded-xl object-cover object-right md:object-left-bottom"
                src={img}
                alt="banner"
                width={1000}
                height={250}
            />
        </div>
    );
};

export default slide;
