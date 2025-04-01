"use client";
import { useState } from "react";

export default function AddBlog() {
    const [formData, setFormData] = useState({
        title: "",
        tags: [],
        categories: [],
        content: "",
        coverImg: "",
        products: [],
        imgUrl: [""], // เริ่มต้นด้วยช่องเปล่า 1 ช่อง
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleImageChange = (index, value) => {
        const newImgUrls = [...formData.imgUrl];
        newImgUrls[index] = value;
        setFormData({ ...formData, imgUrl: newImgUrls });
    };

    const handleAddImage = () => {
        setFormData({ ...formData, imgUrl: [...formData.imgUrl, ""] }); // เพิ่มช่อง input เปล่า
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8080/api/knowledge", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("Blog Added Successfully");
            } else {
                alert("Failed to add blog");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="p-6 max-w-lg mx-auto">
            <h2 className="text-xl font-bold mb-4">Add Blog</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" name="title" placeholder="Title" onChange={handleChange} required className="border p-2 w-full"/>
                <textarea name="content" placeholder="Content" onChange={handleChange} required className="border p-2 w-full"></textarea>
                <input type="text" name="coverImg" placeholder="Cover Image URL" onChange={handleChange} className="border p-2 w-full"/>

                <div>
                    <label className="block font-bold">Image URLs</label>
                    {formData.imgUrl.map((url, index) => (
                        <input 
                            key={index} 
                            type="text" 
                            placeholder={`Image URL ${index + 1}`} 
                            value={url} 
                            onChange={(e) => handleImageChange(index, e.target.value)} 
                            className="border p-2 w-full mt-2"
                        />
                    ))}
                    <button type="button" onClick={handleAddImage} className="mt-2 bg-blue-500 text-white px-4 py-2">
                        Add Image
                    </button>
                </div>

                <button type="submit" className="bg-green-500 text-white px-4 py-2">Submit</button>
            </form>
        </div>
    );
}

