"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import "./style.css";

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
  const params = useParams();
  const id = params?.id;
  const [ingredient, setIngredient] = useState<Ingredient | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
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

  if (loading) return <p className="Dt text-center text-gray-700">กำลังโหลด...</p>;
  if (!ingredient) return <p className="Dt text-center text-gray-700">ไม่พบข้อมูล</p>;

  return (
    <div className="container mx-auto p-6 min-h-screen flex flex-col items-center justify-center proNormal">
      <h1 className="text-6xl font-bold text-center text-[#a087c6] mt-10 mb-10 ">{ingredient.name}</h1>

      <div className="flex flex-col md:flex-row items-center shadow-lg rounded-lg p-6 w-full max-w-6xl bg-white">
        <img
          src={ingredient.imageUrl}
          alt={ingredient.name}
          width={300}
          height={300}
          className="rounded-lg shadow-md"
        />
        <div className="md:ml-6 mt-4 md:mt-0 text-center md:text-left flex flex-col justify-center ">
          <h3 className="text-3xl text-[#694336]">ชื่อเรียกอื่น :</h3>
          <p className="text-gray-500 mt-2 mb-2">{ingredient.alsoCalled}</p>
          <h3 className="text-3xl mb-2 text-[#694336]">คุณสมบัติ :</h3>
          <p className="text-gray-500">{ingredient.whatItDoes}</p>
        </div>
      </div>

      <div className="mt-6 w-full max-w-6xl rounded-lg shadow-lg p-6 ">
        <h3 className="text-3xl mb-4 text-[#694336]">รายละเอียด</h3>
        <p className="text-lg text-gray-500 leading-loose mt-4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ingredient.details}</p>
      </div>

      <div className="mt-6 w-full max-w-6xl rounded-lg shadow-lg p-6">
        <h3 className="text-3xl mb-4 text-[#694336]">แหล่งที่มา</h3>
        <ul className="list-disc pl-6 text-gray-500">
          {ingredient.proof.map((proof, index) => (
            <li key={index} className="mb-2">{proof}</li>
          ))}
        </ul>
      </div>
      <div className="mt-6 w-full max-w-6xl rounded-lg shadow-lg p-6 ">
        <h3 className="text-3xl mb-4 text-[#694336]">ผลิตภัณฑ์ที่มีส่วนผสมนี้</h3>
        <ul className="list-disc pl-6 text-gray-500">
          {ingredient.products.map((product, index) => (
            <li key={index} className="mb-2">{product}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default IngredientPage;