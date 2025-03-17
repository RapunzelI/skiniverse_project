"use client";


import React, { useRef, useState, useEffect } from "react";
import "./style.css"

interface ProductProps {
    title: string;
    description: string;
    image: string;
    link: string;
}

const ProductCard: React.FC<ProductProps> = ({ title, description, image, link }) => {
    return (
        <div className="w-[165px] sm:w-[220px] md:w-[250px] lg:w-[280px] rounded-xl overflow-hidden shadow-md bg-white ">
            <img className="w-full h-[180px] md:h-[200px] object-cover" src={image} alt={title} draggable="false" />
            <div className="px-4 py-3">
                <span className="tracking-widest text-xs text-gray-400 mb-1">
                    Category
                </span>
                <div className="text-sm md:text-base font-medium mb-1">
                    <a href={link} className="no-underline text-gray-900">
                        {title}
                    </a>
                </div>
                <p className="text-gray-600 text-xs md:text-sm">{description}</p>
            </div>
        </div>
    );
};

const Ingredient: React.FC = () => {
    // ใช้ useState เพื่อเก็บค่าค้นหา
    const [searchTerm, setSearchTerm] = useState("");

    const productData: ProductProps[] = [
        { title: "Ingredient 1", description: "Description 1", image: "/banner_1.jpg", link: "/ingredients/pp" },
        { title: "Ingredient 2", description: "Description 2", image: "/banner_1.jpg", link: "#" },
        { title: "Ingredient 3", description: "Description 3", image: "/banner_1.jpg", link: "#" },
        { title: "Ingredient 4", description: "Description 4", image: "/banner_1.jpg", link: "#" },
        { title: "Ingredient 5", description: "Description 5", image: "/banner_2.jpg", link: "#" },
        { title: "Ingredient 6", description: "Description 6", image: "/banner_2.jpg", link: "#" },
    ];

    // กรองการ์ดตามคำค้นหา
    const filteredProducts = productData.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="relative p-4">
            {/* หัวข้อ */}
            <h2 className="ingre text-black text-center mb-6 p-4 text-4xl md:text-5xl lg:text-6xl">
                อธิบายส่วนผสม
            </h2>

            {/* ช่องค้นหา */}
            <div className="ingre flex justify-center mb-6">
                <input
                    type="text"
                    placeholder="ค้นหาส่วนผสม..."
                    className="w-full max-w-md px-4 py-2 border rounded-full text-lg outline-none shadow-md"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* Grid แสดงรายการการ์ด */}
            <div className="flex justify-center">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-2">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product, index) => (
                            <ProductCard
                                key={index}
                                title={product.title}
                                description={product.description}
                                image={product.image}
                                link={product.link}
                            />
                        ))
                    ) : (
                        <p className="text-center text-gray-500 col-span-full">ไม่พบข้อมูล</p>
                    )}
                </div>
            </div>
            <div className="h-50"></div>
        </div>
    );
};

export default Ingredient;