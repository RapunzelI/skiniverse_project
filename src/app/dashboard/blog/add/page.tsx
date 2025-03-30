"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddBlogPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    tags: "",
    categories: "",
    content: "",
    coverImg: "",
    products: "",
    imgUrl: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const blogData = {
      title: form.title,
      tags: form.tags.split(",").map(tag => tag.trim()),
      categories: form.categories.split(",").map(category => category.trim()),
      content: form.content,
      coverImg: form.coverImg,
      products: form.products.split(",").map(product => product.trim()),
      imgUrl: form.imgUrl.split(",").map(url => url.trim())
    };

    const response = await fetch("http://localhost:8080/api/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blogData)
    });

    if (response.ok) {
      router.push("/");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Add New Blog</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="title" placeholder="Title" value={form.title} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="text" name="tags" placeholder="Tags (comma-separated)" value={form.tags} onChange={handleChange} className="w-full p-2 border rounded" />
        <input type="text" name="categories" placeholder="Categories (comma-separated)" value={form.categories} onChange={handleChange} className="w-full p-2 border rounded" />
        <textarea name="content" placeholder="Content" value={form.content} onChange={handleChange} className="w-full p-2 border rounded" required></textarea>
        <input type="text" name="coverImg" placeholder="Cover Image URL" value={form.coverImg} onChange={handleChange} className="w-full p-2 border rounded" />
        <input type="text" name="products" placeholder="Products (comma-separated)" value={form.products} onChange={handleChange} className="w-full p-2 border rounded" />
        <input type="text" name="imgUrl" placeholder="Image URLs (comma-separated)" value={form.imgUrl} onChange={handleChange} className="w-full p-2 border rounded" />
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">Submit</button>
      </form>
    </div>
  );
}
