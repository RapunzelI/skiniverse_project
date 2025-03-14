"use client";

import React, { useRef, useState, useEffect } from "react";

interface BuyButtonProps {
    link: string;
}

const BuyButton: React.FC<BuyButtonProps> = ({ link }) => {
    return (
        <a
            href={link}
            className="inline-block bg-purple-700 text-white px-4 py-2 text-sm font-semibold cursor-pointer tracking-widest rounded-full hover:bg-purple-600"
        >
            ดูเพิ่ม
        </a>
    );
};

interface ProductProps {
    title: string;
    description: string;
    image: string;
    link: string;
}

const ProductCard: React.FC<ProductProps> = ({ title, description, image, link }) => {
    return (
        <div className="min-w-[300px] md:min-w-[350px] rounded-2xl overflow-hidden shadow-lg bg-white">
            <img className="w-full h-[250px] md:h-[300px] object-cover" src={image} alt={title} draggable="false" />
            <div className="px-6 py-4">
                <span className="tracking-widest text-xs md:text-sm title-font font-medium text-gray-400 mb-1">
                    Category
                </span>
                <div className="text-md md:text-lg font-medium mb-2">
                    <a href={link} className="no-underline text-gray-900">
                        {title}
                    </a>
                </div>
                <p className="text-gray-700 text-sm md:text-base">{description}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <BuyButton link={link} />
            </div>
        </div>
    );
};

const products: React.FC = () => {
    const productData: ProductProps[] = [
        { title: "Product 1", description: "Description 1", image: "/banner_1.jpg", link: "#" },
        { title: "Product 2", description: "Description 2", image: "/banner_1.jpg", link: "#" },
        { title: "Product 3", description: "Description 3", image: "/banner_1.jpg", link: "#" },
        { title: "Product 4", description: "Description 4", image: "/banner_1.jpg", link: "#" },
        { title: "Product 5", description: "Description 5", image: "/banner_2.jpg", link: "#" },
        { title: "Product 6", description: "Description 6", image: "/banner_2.jpg", link: "#" },
    ];

    const scrollRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    let isDragging = false;
    let startX = 0;
    let scrollLeft = 0;

    const startDrag = (e: React.MouseEvent | React.TouchEvent) => {
        isDragging = true;
        startX = "touches" in e ? e.touches[0].pageX : e.pageX;
        scrollLeft = scrollRef.current?.scrollLeft || 0;
    };

    const onDrag = (e: React.MouseEvent | React.TouchEvent) => {
        if (!isDragging || !scrollRef.current) return;
        const x = "touches" in e ? e.touches[0].pageX : e.pageX;
        const walk = (startX - x) * 1.5;
        scrollRef.current.scrollLeft = scrollLeft + walk;
    };

    const stopDrag = () => {
        isDragging = false;
    };

    useEffect(() => {
        const updatePagination = () => {
            if (!scrollRef.current) return;
            const scrollLeft = scrollRef.current.scrollLeft;
            const scrollWidth = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
            const index = Math.round((scrollLeft / scrollWidth) * (productData.length - 1));
            setActiveIndex(index);
        };

        const scrollContainer = scrollRef.current;
        scrollContainer?.addEventListener("scroll", updatePagination);
        return () => scrollContainer?.removeEventListener("scroll", updatePagination);
    }, []);

    return (
        <div className="relative p-4">
            <h2 className="text-6xl font-bold text-black text-left mb-4 p-4">
                Products
            </h2>

            {/* Scrollable product container without scrollbar */}
            <div 
                ref={scrollRef} 
                className="flex space-x-4 overflow-x-auto scroll-smooth p-4 mx-8 select-none no-scrollbar"
                style={{ scrollBehavior: "smooth" }}
                onMouseDown={startDrag}
                onMouseMove={onDrag}
                onMouseUp={stopDrag}
                onMouseLeave={stopDrag}
                onTouchStart={startDrag}
                onTouchMove={onDrag}
                onTouchEnd={stopDrag}
            >
                {productData.map((product, index) => (
                    <ProductCard 
                        key={index} 
                        title={product.title} 
                        description={product.description} 
                        image={product.image} 
                        link={product.link}
                    />
                ))}
            </div>

            {/* Pagination Dots */}
                <div className="flex justify-center mt-4">
                    {productData.map((_, index) => (
                        <span
                            key={index}
                            className={`h-1.25 w-1.25 mx-3 rounded-full transition-all ${
                                index === activeIndex ? "bg-gray-900 scale-110" : "bg-gray-300"
                            }`}
                        ></span>
                    ))}
                </div>

        </div>
    );
};

export default products;
