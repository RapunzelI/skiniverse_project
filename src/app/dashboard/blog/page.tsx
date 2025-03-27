"use client";

import React, { useState } from "react";
import Link from "next/link";

const Blog: React.FC = () => {

    return (
        <div id="webcrumbs">
            <div className="container mx-auto p-6 lg:min-w-[1200px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="flex flex-col justify-center">
                        <h2 className="text-2xl font-bold mb-3 transition-transform hover:translate-x-1">
                            หัวข้อเรื่อง
                        </h2>
                        <p className="text-sm text-gray-600 mb-4">รายละเอียดเนื้อหา</p>
                        <Link href="/dashboard/blog/detail">
                        <button className="bg-black text-white rounded px-4 py-2 w-fit hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
                            Button
                        </button></Link>
                        {/* Next: "Add social media share buttons" */}
                    </div>
                    <div className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                        <img
                            src="/banner_1.jpg"
                            alt="Two pears on a light background"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                        {/* Next: "Add image caption overlay" */}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                        <img
                            src="/banner_2.jpg"
                            alt="Watermelon slices"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                        {/* Next: "Add lazy loading attribute" */}
                    </div>
                    <div className="flex flex-col justify-center">
                        <h2 className="text-2xl font-bold mb-3 transition-transform hover:translate-x-1">
                            หัวข้อเรื่อง
                        </h2>
                        <p className="text-sm text-gray-600 mb-4">รายละเอียด</p>
                        <button className="bg-black text-white rounded px-4 py-2 w-fit hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
                            Button
                        </button>
                        {/* Next: "Add read more link with arrow icon" */}
                    </div>
                </div>

                <h2 className="text-2xl font-bold mb-8 transition-transform hover:translate-x-1">Section heading</h2>
                {/* Next: "Add a horizontal divider below heading" */}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2 overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                        <img
                            src="/banner_3.png"
                            alt="Pears arrangement"
                            className="w-full h-full object-cover hover:scale-102 transition-transform duration-500"
                        />
                        <div className="p-3">
                            <h3 className="text-lg font-semibold transition-transform hover:translate-x-1">
                                หัวข้อเรื่อง
                            </h3>
                            <p className="text-sm text-gray-600">รายละเอียด</p>
                        </div>
                        {/* Next: "Add 'View details' button" */}
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                            <img
                                src="/banner_4.png"
                                alt="Two pears"
                                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                            />
                            <div className="p-3">
                                <h3 className="text-lg font-semibold transition-transform hover:translate-x-1">
                                    หัวข้อเรื่อง
                                </h3>
                                <p className="text-sm text-gray-600">รายละเอียด</p>
                            </div>
                            {/* Next: "Add rating stars" */}
                        </div>
                        <div className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                            <img
                                src="/banner_5.jpg"
                                alt="Mushrooms"
                                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                            />
                            <div className="p-3">
                                <h3 className="text-lg font-semibold transition-transform hover:translate-x-1">
                                    หัวข้อเรื่อง
                                </h3>
                                <p className="text-sm text-gray-600">รายละเอียด</p>
                            </div>
                            {/* Next: "Add 'New' badge overlay" */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;