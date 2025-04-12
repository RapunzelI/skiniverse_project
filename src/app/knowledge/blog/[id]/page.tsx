"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import "./style.css"
import { IoChevronBackOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";


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
    const router = useRouter();
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
        const parts = blog.content.split(/(\{image\d+\})/g);
        return parts.flatMap((part, index) => {
            const match = part.match(/\{image(\d+)\}/);
            if (match) {
                const imgIndex = parseInt(match[1], 10) - 1;
                if (blog.imgUrl[imgIndex]) {
                    return (
                        <img
                            key={`img-${index}`}
                            src={blog.imgUrl[imgIndex]}
                            alt={`Image ${imgIndex + 1}`}
                            className="rounded-lg shadow-md w-full max-w-sm mx-auto mb-4"
                        />
                    );
                }
            }
    
            
            return part.split("\n").map((line, i) => (
                <p
                    key={`text-${index}-${i}`}
                    className="text-gray-500 text-lg mb-4 whitespace-pre-line leading-8"
                    dangerouslySetInnerHTML={{ __html: line.replace(/  /g, '&nbsp;&nbsp;') }}//ใช้เว้นวรรคกับเว้นบรรทัดใน mongodb 
                />
            ));
            
            
        });
    };
    

    return (
        <div className=" bg-gray-100">
        <div className="container mx-auto w-full p-6 flex flex-col items-center">
            <h1 className="titel text-4xl lg:text-6xl text-center  mb-6">{blog.title}</h1>

            {/* Cover Image */}
            <div className="flex justify-center mb-6">
                <img src={blog.coverImg} alt="Cover" className="rounded-lg shadow-md w-full max-w-lg" />
            </div>

            {/* Blog Content in Vertical Layout */}
            <div className=" mt-6 w-full max-w-6xl bg-white rounded-lg shadow-lg p-6 flex flex-col ">
                <h3 className="content text-3xl  mb-4">เนื้อหา</h3>
                <div className="detail flex flex-col ">{renderContentWithImages()}</div>
            </div>

            

        </div>

            <div className=" mx-auto p-5">
                <button
                    onClick={() => router.back()}
                    className="lg:ml-28 mb-4 px-2 py-2 bg-black hover:bg-[#f2dfcf] text-white hover:text-black text-lg rounded-full shadow flex "
                >
                    <IoChevronBackOutline className="text-2xl" />
                </button>
            </div>
        
        </div>
    );
};

export default BlogPage;
