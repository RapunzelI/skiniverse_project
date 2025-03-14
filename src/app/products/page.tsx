"use client";

import React from "react";
import Slider from "react-slick";
import Slide from "./slide";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ScrollPic = () => {
    
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
        TbBackground: null
    
    }

    const slideData = [
        {
            id: 0,
            img: "/banner_1.jpg",
            title: "Skincare1",
            mainTitle: "Test Picture1",
            price: "$20"
        },
        {
            id: 1,
            img: "/banner_2.jpg",
            title: "Skincare1",
            mainTitle: "Test Picture1",
            price: "$20"
        },
        {
            id: 2,
            img: "/banner_3.png",
            title: "Skincare1",
            mainTitle: "Test Picture1",
            price: "$20"
        },
        {
            id: 3,
            img: "/banner_5.jpg",
            title: "Skincare1",
            mainTitle: "Test Picture1",
            price: "$20"
        },
    ];

    return(
        <div className="container pt-6 flex justify-center">
            <div className="max-w-[1050px] w-full px-4 ">
                <Slider {...settings}>
                    {slideData.map((item) => (
                        <Slide key={item.id}
                            img={item.img}
                            title={item.title}
                            mainTitle={item.mainTitle}
                            price={item.price}
                        />
                    ))}
                </Slider>
            </div>
        </div>

    )

} 

export default ScrollPic