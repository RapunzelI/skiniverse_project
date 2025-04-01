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
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">{product.name}</h1>

      <div className="flex justify-center mb-6">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={300}
          height={300}
          className="rounded-lg shadow-md"
        />
      </div>

      <div className="mt-6 w-full max-w-2xl bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-2xl font-semibold text-gray-800">รายละเอียด</h3>
        <p className="text-gray-700">{product.description}</p>
      </div>

      <div className="mt-6 w-full max-w-2xl bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-2xl font-semibold text-gray-800">แบรนด์</h3>
        <p className="text-gray-700">{product.brand}</p>
      </div>

      <div className="mt-6 w-full max-w-2xl bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-2xl font-semibold text-gray-800">หมวดหมู่</h3>
        <p className="text-gray-700">{product.categories.join(", ")}</p>
      </div>

      <div className="mt-6 w-full max-w-2xl bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-2xl font-semibold text-gray-800">เหมาะสำหรับผิวประเภท</h3>
        <p className="text-gray-700">{product.skinTypes.join(", ")}</p>
      </div>

      <div className="mt-6 w-full max-w-2xl bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-2xl font-semibold text-gray-800">ขนาด</h3>
        <p className="text-gray-700">{product.size}</p>
      </div>

      <div className="mt-6 w-full max-w-2xl bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-2xl font-semibold text-gray-800">บรรจุภัณฑ์</h3>
        <p className="text-gray-700">{product.packaging}</p>
      </div>
      <div className="mt-6 w-full max-w-2xl bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-2xl font-semibold text-gray-800">ส่วนผสม</h3>
        <p className="text-gray-700">{product.ingredient.join(", ")}</p>
      </div>
      <div className="mt-6 w-full max-w-2xl bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-2xl font-semibold text-gray-800">ส่วนผสม</h3>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">ชื่อ</th>
              <th className="border border-gray-300 px-4 py-2">หน้าที่</th>
              <th className="border border-gray-300 px-4 py-2">id rating</th>
            </tr>
          </thead>
          <tbody>
            {product.ingredient.map((name, index) => {
              const ing = ingredients[name];
              return (
                <tr key={index} className="text-gray-700">
                  <td className="border border-gray-300 px-4 py-2">
                    {ing ? (
                      <a href={`/ingredients/${ing.id}`} className="text-blue-500 hover:underline">
                        {name}
                      </a>
                      ) : (name)}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">{ing ? ing.whatItDoes : "ไม่พบข้อมูล"}</td>
                  <td className="border border-gray-300 px-4 py-2">{ing ? ing.rate : "ไม่พบข้อมูล"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="mt-6 w-full max-w-2xl bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-2xl font-semibold text-gray-800">ลิงก์ผลิตภัณฑ์</h3>
        <ul className="list-disc pl-6 text-gray-700">
          {product.productLinks.map((link, index) => (
            <li key={index} className="mb-2">
              <a href={link} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
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
