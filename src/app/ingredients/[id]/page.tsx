"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // ✅ ใช้ useParams() แทน useRouter()
import Image from "next/image";

interface Ingredient {
  id: string;
  name: string;
  rate: string;
  details: string;
  proof: string[];
  products: string[];
  alsoCalled: string;
  imageUrl: string;
  whatItDoes: string;
}

const IngredientPage: React.FC = () => {
  const params = useParams(); // ✅ ดึง id จาก URL
  const id = params?.id; // ✅ ป้องกัน undefined
  const [ingredient, setIngredient] = useState<Ingredient | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return; // ป้องกันการ fetch ถ้า id ยังไม่มี
    fetch(`http://localhost:8080/api/ingredients/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setIngredient(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching ingredient:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center text-gray-700">กำลังโหลด...</p>;
  if (!ingredient) return <p className="text-center text-gray-700">ไม่พบข้อมูล</p>;

  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">{ingredient.name}</h1>

      <div className="flex justify-center mb-6">
        <img
          src={ingredient.imageUrl}
          alt={ingredient.name}
          width={300}
          height={300}
          className="rounded-lg shadow-md"
        />
      </div>
      <div className="mt-6 w-full max-w-2xl bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-2xl font-semibold text-gray-800">ชื่อเรียกอื่น</h3>
        <p className="text-gray-700">{ingredient.alsoCalled}</p>
      </div>
      <div className="mt-6 w-full max-w-2xl bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-2xl font-semibold text-gray-800">คุณสมบัติ</h3>
        <p className="text-gray-700">{ingredient.whatItDoes}</p>
      </div>

      <div className="mt-6 w-full max-w-2xl bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-2xl font-semibold text-gray-800">รายละเอียด</h3>
        
      <p className="text-lg text-center text-gray-700 mt-4">{ingredient.details}</p>
      </div>

      <div className="mt-6 w-full max-w-2xl bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-2xl font-semibold text-gray-800">แหล่งที่มา</h3>
        <ul className="list-disc pl-6 text-gray-700">
          {ingredient.proof.map((proof, index) => (
            <li key={index} className="mb-2">{proof}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6 w-full max-w-2xl bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-2xl font-semibold text-gray-800">ผลิตภัณฑ์ที่มีส่วนผสมนี้</h3>
        <ul className="list-disc pl-6 text-gray-700">
          {ingredient.products.map((product, index) => (
            <li key={index} className="mb-2">{product}</li>
          ))}
        </ul>
      </div>

      

      
    </div>
  );
};

export default IngredientPage;
