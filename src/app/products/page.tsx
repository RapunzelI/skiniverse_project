"use client";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Slide from "./slide";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CiSearch } from "react-icons/ci";

interface ProductsData {
  id: string;
  name: string;
  brand: string;
  imageUrl: string;
  categories: string[];
}

const ScrollPic: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };

  const slideData = [
    { id: 0, img: "/banner_1.jpg", title: "Skincare1", mainTitle: "Test Picture1" },
    { id: 1, img: "/banner_2.jpg", title: "Skincare1", mainTitle: "Test Picture1" },
    { id: 2, img: "/banner_3.png", title: "Skincare1", mainTitle: "Test Picture1" },
    { id: 3, img: "/banner_5.jpg", title: "Skincare1", mainTitle: "Test Picture1" },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState<ProductsData[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full max-w-[1400px] px-4 md:px-6 lg:px-12 mt-8 mb-10">
        <div className="w-full h-auto max-h-[500px] md:max-h-[600px] lg:max-h-[700px]">
          <Slider {...settings}>
            {slideData.map((item) => (
              <Slide key={item.id} img={item.img} title={item.title} mainTitle={item.mainTitle} />
            ))}
          </Slider>
        </div>
      </div><br/><br/><br/>
            
      <div className="profont flex justify-center mb-10">
        <div className="relative w-full max-w-md">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <CiSearch className="text-black-800" />
          </div>
          <input
            type="text"
            placeholder="ค้นหาผลิตภัณฑ์..."
            className="w-full px-10 py-2 border rounded-full text-lg outline-none shadow-md"
            value={searchTerm || ""}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-2">
        {products.length > 0 ? (
          products
            .filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
            .map((product) => (
              <div key={product.id} className="w-[165px] sm:w-[220px] md:w-[250px] lg:w-[280px] rounded-xl overflow-hidden shadow-md bg-white">
                <img className="w-full h-[180px] md:h-[200px] object-cover" src={product.imageUrl} alt={product.name} draggable="false" />
                <div className="px-4 py-3">
                  <span className="tracking-widest text-xs text-gray-400 mb-1">
                    <p>{product.categories.join(", ")}</p>
                  </span>
                  <div className="text-sm md:text-base font-medium mb-1">
                    <a href={`/products/${product.id}`} className="no-underline text-gray-900">
                      {product.brand} {product.name}
                    </a>
                  </div>
                </div>
              </div>
            ))
        ) : (
          <p className="ingre text-center text-gray-500 col-span-full">ไม่พบข้อมูล</p>
        )}
      </div>
    </div>
  );
};

export default ScrollPic;
