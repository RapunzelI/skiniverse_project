"use client";

import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import "./style.css";
import Gallery from "./slide";

interface IngredientData {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  whatItDoes: string;
}

const Ingredient: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [ingredients, setIngredients] = useState<IngredientData[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/ingredients")
      .then((res) => res.json())
      .then((data) => setIngredients(data))
      .catch((error) => console.error("Error fetching ingredients:", error));
  }, []);

  // Function to handle navigation to ingredient detail page
  const navigateToIngredient = (id: string) => {
    window.location.href = `/ingredients/${id}`;
  };

  return (
    <div className="relative p-4">
      <h2 className="profont text-black text-center mb-6 p-4 text-4xl md:text-5xl lg:text-6xl">
        อธิบายส่วนผสม
      </h2>

      {/* ช่องค้นหา */}
      <div className=" flex justify-center mb-10">
        <div className="relative w-full max-w-md">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <CiSearch className="text-black-800" />
          </div>
          <input
            type="text"
            placeholder="ค้นหาส่วนผสม..."
            className="proNormal w-full px-10 py-2 border rounded-full text-lg outline-none shadow-md"
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
                <div 
                  key={ingredient.id} 
                  className="w-[165px] sm:w-[220px] md:w-[250px] lg:w-[280px] rounded-xl overflow-hidden shadow-md bg-white cursor-pointer hover:shadow-lg transition-shadow duration-300"
                  onClick={() => navigateToIngredient(ingredient.id)}
                >
                  <img 
                    className="w-full h-[180px] md:h-[200px] object-cover" 
                    src={ingredient.imageUrl} 
                    alt={ingredient.name} 
                    draggable="false" 
                  />
                  <div className="text-sm md:text-base font-medium mb-1 px-4 mt-3">
                    <div className="no-underline text-gray-900">
                      {ingredient.name}
                    </div>
                  </div>
                  <p className="text-gray-600 text-xs md:text-sm px-4">{ingredient.description}</p>
                  <div className="px-4 mb-3">
                    <span className="ingre text-gray-500 tracking-widest text-xs mb-1">
                      <p>{ingredient.whatItDoes}</p>
                    </span>
                  </div>
                </div>
              ))
          ) : (
            <p className="proNormal text-center text-gray-500 col-span-full">ไม่พบข้อมูล</p>
          )}
        </div>
      </div>
      <Gallery/>
    </div>
  );
};

export default Ingredient;
