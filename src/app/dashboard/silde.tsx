import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";

interface propsType {
    img: string;
    title: string;
    mainTitle: string;
    price: string;
}

const Slide: React.FC<propsType> = ({ img, title, mainTitle, price }) => {
    return (
        <div className="outline-none border-none relative">
            <div className="absolute left-[80px] md:left-[200px] max-w-[250px] sm:max-w-[350px] top-[50%] -translate-y-[50%] 
            space-y-2 lg:space-y-4 bg-[#ffffffa2] sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none">
                <h3 className="text-accent text-[24px] lg:text-[28px]">{title}</h3>
                <h2 className="text-blackish text-[26px] md:text-[30px] lg:text-[44px] font-bold leading-[1.2]">
                    {mainTitle}
                </h2>

                <h3 className="text-[24px] text-gray-500">
                    starting at{" "}
                    <b className="text-[20px] md:text-[24px] lg:text-[30px]">{price}</b>
                    now
                </h3>
                <div className="bg-[#CC99FF] text-white text-[14px] md:text-[16px] p-2 px-4 rounded-lg inline-block cursor-pointer hover:bg-blackish">
                    Start
                </div>
            </div>
            <Image
                className="w-full md:h-[70vh] object-cover object-center md:object-left-bottom rounded-xl h-auto"
                src={img}
                alt="banner"
                width={1000}
                height={250}
            />
        </div>
    );
};

const SlideShow: React.FC = () => {
    const slides = [
        {
            img: "/banner_1.jpg",
            title: "Title 1",
            mainTitle: "Main Title 1",
            price: ".",
        },
        {
            img: "/banner_2.jpg",
            title: "Title 2",
            mainTitle: "Main Title 2",
            price: ".",
        },
        {
            img: "/banner_3.png",
            title: "Title 3",
            mainTitle: "Main Title 3",
            price: ".",
        },
    ];

    const [currentSlide, setCurrentSlide] = useState<number>(0);

    // โหลดค่าจาก localStorage เมื่อ component โหลดครั้งแรก
    useEffect(() => {
        const savedSlide = localStorage.getItem("currentSlide");
        if (savedSlide !== null) {
            setCurrentSlide(parseInt(savedSlide, 10));
        }
    }, []);

    // บันทึกค่าลง localStorage ทุกครั้งที่ currentSlide เปลี่ยน
    useEffect(() => {
        localStorage.setItem("currentSlide", currentSlide.toString());
    }, [currentSlide]);

    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const goToPrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

    return (
        <div key={currentSlide} className="relative">
            <Slide
                img={slides[currentSlide].img}
                title={slides[currentSlide].title}
                mainTitle={slides[currentSlide].mainTitle}
                price={slides[currentSlide].price}
            />
            <div className="absolute top-1/2 left-0 md:left-[50px] transform -translate-y-1/2 p-4">
                <button
                    onClick={goToPrevSlide}
                    className="btnL w-12 h-12 text-4xl flex items-center justify-center rounded-full shadow-lg hover:bg-[#a087c6] !important"
                    
                >
                    <FaCircleChevronLeft className="w-8 h-8" />
                </button>
            </div>

            <div className="absolute top-1/2 right-0 md:right-[50px] transform -translate-y-1/2 p-4">
                <button
                    onClick={goToNextSlide}
                    className="btnR w-12 h-12 text-4xl flex items-center justify-center rounded-full shadow-lg hover:bg-[#a087c6] !important"
                >
                    <FaCircleChevronRight className="w-8 h-8" />
                </button>
            </div>
        </div>
    );
};

export default SlideShow;


