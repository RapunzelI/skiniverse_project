"use client";

import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { debounce } from "lodash";
import "./style.css";

interface ProductProps {
    title: string;
    description: string;
    image: string;
    link: string;
}

const ProductCard: React.FC<ProductProps> = ({ title, description, image, link }) => {
    return (
        <div className="w-[165px] sm:w-[220px] md:w-[250px] lg:w-[280px] rounded-xl overflow-hidden shadow-md bg-white">
            <img className="w-full h-[180px] md:h-[200px] object-cover" src={image} alt={title} draggable="false" />
            <div className="px-4 py-3">
                <span className="profont tracking-widest text-xs text-gray-400 mb-1">
                    หมวด
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

const Products: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>("");


    const productData: ProductProps[] = [
        { title: "Userin 1", description: "Description 1", image: "/banner_1.jpg", link: "/products/pp" },
        { title: "Product 2", description: "Description 2", image: "/banner_1.jpg", link: "#" },
        { title: "Product 3", description: "Description 3", image: "/banner_1.jpg", link: "#" },
        { title: "Product 4", description: "Description 4", image: "/banner_1.jpg", link: "#" },
        { title: "Product 5", description: "Description 5", image: "/banner_2.jpg", link: "#" },
        { title: "Product 6", description: "Description 6", image: "/banner_2.jpg", link: "#" },
        { title: "Product 7", description: "Description 7", image: "/banner_2.jpg", link: "#" },
        { title: "Product 8", description: "Description 8", image: "/banner_2.jpg", link: "#" },
    ];

    const handleSearch = debounce((value: string) => {
        setSearchTerm(value);
    }, 300); // 300ms debounce delay

    const filteredProducts = productData.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="relative p-4">
            <h2 className="profont text-black text-center mt-10 mb-6 p-4 text-4xl md:text-5xl lg:text-6xl">
                ผลิตภัณฑ์
            </h2>

            <div className="profont flex justify-center mb-10 ">
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
                        <p className="profont text-center text-gray-500 col-span-full">ไม่พบข้อมูล</p>
                    )}
                </div>
            </div>
            <div className="h-50"></div>
        </div>
    );
};

export default Products;
