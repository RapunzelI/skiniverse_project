"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import "./style.css";

interface Ingredient {
  id: string;
  name: string;
  whatItDoes: string;
  rate: string;
}

interface ProductsData {
  id: string;
  name: string;
  brand: string;
  categories: string[];
  description: string;
  productLinks: string[];
  packaging: string;
  size: string;
  skinTypes: string[];
  imageUrl: string;
  ingredient: string[];
}

const ProductPage: React.FC = () => {
  const params = useParams();
  const id = params?.id;
  const [product, setProduct] = useState<ProductsData | null>(null);
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    
    fetch(`http://localhost:8080/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);

        // เรียก API หา ingredient แต่ละตัว
        const ingredientPromises = data.ingredient.map((name: string) =>
          fetch(`http://localhost:8080/api/ingredients/search/${encodeURIComponent(name)}`)
            .then((res) => res.json())
            .catch(() => null)
        );

        return Promise.all(ingredientPromises).then((ingredientData) => {
          const ingredientList: Ingredient[] = ingredientData.filter((ing): ing is Ingredient => ing !== null);
          setIngredients(ingredientList);
          setLoading(false);
        });
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center text-gray-700">กำลังโหลด...</p>;
  if (!product) return <p className="text-center text-gray-700">ไม่พบข้อมูล</p>;

  return (
    <div className="container mx-auto p-6 min-h-screen flex flex-col items-center justify-center proNormal">
      <h1 className="text-5xl font-bold text-center text-[#a087c6] mt-10 mb-10">{product.name}</h1>

      <div className="flex flex-col md:flex-row items-center shadow-lg rounded-lg p-6 w-full max-w-6xl bg-white">
        <img
          src={product.imageUrl}
          alt={product.name}
          width={300}
          height={300}
          className="rounded-lg shadow-md"
        />
        <div className="md:ml-6 mt-4 md:mt-0 text-center md:text-left flex flex-col justify-center ">
          <h3 className="text-2xl proNormal text-[#694336]">ชื่อแบรนด์</h3>
          <p className="text-gray-500">{product.brand}</p>
          <h3 className="text-2xl proNormal text-[#694336]">หมวดหมู่</h3>
          <p className="text-gray-500">{product.categories.join(", ")}</p>
          <h3 className="text-2xl proNormal text-[#694336]">เหมาะสำหรับผิวประเภท</h3>
          <p className="text-gray-500">{product.skinTypes.join(", ")}</p>
          <h3 className="text-2xl proNormal text-[#694336]">ขนาด</h3>
          <p className="text-gray-500">{product.size}</p>
          <h3 className="text-2xl proNormal text-[#694336]">บรรจุภัณฑ์</h3>
          <p className="text-gray-500">{product.packaging}</p>
          </div>
      </div>

      <div className="mt-6 w-full max-w-6xl bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-3xl mb-4 text-[#694336]">รายละเอียด</h3>
        <p className="text-gray-500 mt-2 mb-2">{product.description}</p>
      </div>
      <div className="mt-6 w-full max-w-6xl bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-3xl mb-4 text-[#694336]">ส่วนผสม</h3>
        <p className="text-gray-500 mt-2 mb-2">{product.ingredient.join(", ")}</p>
      </div>
      <div className="mt-6 w-full max-w-6xl bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-3xl mb-8 text-[#694336] ">ตารางส่วนผสม</h3>
        <table className="w-full border-collapse border border-gray-300 rounded-lg proNor ">
          <thead>
            <tr className="bg-[#a087c6] ">
              <th className="border border-gray-300 px-4 py-2 proNor text-white">รายชื่อส่วนผสม</th>
              <th className="border border-gray-300 px-4 py-2 proNor text-white">สามารถทำอะไรได้</th>
              <th className="border border-gray-300 px-4 py-2 proNor text-white">เรตติง</th>
            </tr>
          </thead>  
          <tbody>
            {product.ingredient.map((name, index) => {
              const ing = ingredients.find((ingredient) => ingredient.name === name);
              return (
                <tr key={index} className="text-gray-500 proNor">
                  <td className="border border-gray-300 px-4 py-2 proNor">
                    {ing ? (
                      <a href={`/ingredients/${ing.id}`} className="text-gray-500 hover:text-[#a087c6]">
                        {name}
                      </a>
                      ) : (name)}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 proNormal">{ing ? ing.whatItDoes : "ไม่พบข้อมูล"}</td>
                  <td className="border border-gray-300 px-4 py-2 proNormal">{ing ? ing.rate : "ไม่พบข้อมูล"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="mt-6 w-full max-w-6xl bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-3xl text-[#694336] mb-4">ลิงก์ผลิตภัณฑ์</h3>
        <ul className="list-disc pl-6 text-gray-700">
          {product.productLinks.map((link, index) => (
            <li key={index} className="mb-2">
              <a href={link} className="text-gray-500 hover:text-[#a087c6]" target="_blank" rel="noopener noreferrer">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductPage;
