"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

// ✅ Interface สำหรับข้อมูล Blog
interface Blog {
    _id: number;
    title: string;
    tags: string[];
    categories: string[];
    content: string;
    coverImg: string;
    products: string[];
    imgUrl: string[];
}

const BlogPage: React.FC = () => {
    const params = useParams();
    const id = params?.id;
    const [blog, setBlog] = useState<Blog | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;
        fetch(`http://localhost:8080/api/knowledge/${id}`)
            .then((res) => res.json())
            .then((data: Blog) => {
                setBlog(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching blog:", error);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <p className="text-center text-gray-700">กำลังโหลด...</p>;
    if (!blog) return <p className="text-center text-gray-700">ไม่พบข้อมูล</p>;

    // ✅ ฟังก์ชันแทนค่า {image1}, {image2} ด้วย <img> และจัดเรียงแนวตั้ง
    const renderContentWithImages = (): React.ReactElement[] => {
        const parts = blog.content.split(/(\{image\d+\})/g); // แยกข้อความและ `{imageX}`
        return parts.map((part, index) => {
            const match = part.match(/\{image(\d+)\}/);
            if (match) {
                const imgIndex = parseInt(match[1], 10) - 1;
                if (blog.imgUrl[imgIndex]) {
                    return (
                        <img
                            key={index}
                            src={blog.imgUrl[imgIndex]}
                            alt={`Image ${imgIndex + 1}`}
                            className="rounded-lg shadow-md w-full max-w-sm mx-auto mb-4"
                        />
                    );
                }
            }
            return <p key={index} className="text-gray-700 text-lg text-center mb-4">{part}</p>;
        });
    };

    return (
        <div className="container mx-auto p-6 bg-gray-100 min-h-screen flex flex-col items-center">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">{blog.title}</h1>

            {/* Cover Image */}
            <div className="flex justify-center mb-6">
                <img src={blog.coverImg} alt="Cover" className="rounded-lg shadow-md w-full max-w-lg" />
            </div>

            {/* Blog Content in Vertical Layout */}
            <div className="mt-6 w-full max-w-2xl bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">เนื้อหา</h3>
                <div className="flex flex-col items-center">{renderContentWithImages()}</div>
            </div>

            
        </div>
    );
};

export default BlogPage;
