"use client";

import React, { useState, useEffect } from "react"; // Import useEffect
import { CiSearch } from "react-icons/ci";
import "./style.css";

interface IngredientData {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  categories: string;
}

const Ingredient: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [ingredients, setIngredients] = useState<IngredientData[]>([]); // ใช้ useState เก็บข้อมูล

  useEffect(() => {
    fetch("http://localhost:8080/api/ingredients")
      .then((res) => res.json())
      .then((data) => setIngredients(data)) // บันทึกข้อมูล API
      .catch((error) => console.error("Error fetching ingredients:", error));
  }, []);

  return (
    <div className="relative p-4">
      <h2 className="ingre text-black text-center mb-6 p-4 text-4xl md:text-5xl lg:text-6xl">
        อธิบายส่วนผสม
      </h2>

      {/* ช่องค้นหา */}
      <div className="profont flex justify-center mb-10">
        <div className="relative w-full max-w-md">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <CiSearch className="text-black-800" />
          </div>
          <input
            type="text"
            placeholder="ค้นหาส่วนผสม..."
            className="w-full px-10 py-2 border rounded-full text-lg outline-none shadow-md"
            value={searchTerm || ""}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Grid แสดงข้อมูล */}
      <div className="flex justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-2">
          {ingredients.length > 0 ? (
            ingredients
              .filter((ingredient) =>
                ingredient.name.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((ingredient) => (
                <div key={ingredient.id} className="w-[165px] sm:w-[220px] md:w-[250px] lg:w-[280px] rounded-xl overflow-hidden shadow-md bg-white">
                  <img className="w-full h-[180px] md:h-[200px] object-cover" src={ingredient.imageUrl} alt={ingredient.name} draggable="false" />
                  <div className="px-4 py-3">
                    <span className="tracking-widest text-xs text-gray-400 mb-1">
                      <p>{ingredient.categories}</p>
                    </span>
                    <div className="text-sm md:text-base font-medium mb-1">
                      <a href={`/ingredients/${ingredient.id}`} className="no-underline text-gray-900">
                        {ingredient.name}
                      </a>
                    </div>
                    <p className="text-gray-600 text-xs md:text-sm">{ingredient.description}</p>
                  </div>
                </div>
              ))
          ) : (
            <p className="ingre text-center text-gray-500 col-span-full">ไม่พบข้อมูล</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Ingredient;
