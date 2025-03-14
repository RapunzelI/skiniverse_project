'use client';

import { useState } from 'react';
import "./style.css"

export default function SkincarePriceCompare() {
  const [products, setProducts] = useState([{ name: '', amount: '', unit: 'ml', price: '' }
                                            ,{ name: '', amount: '', unit: 'ml', price: '' }
  ]);
  const [results, setResults] = useState<{ pricePerUnit: number, index: number }[] | null>(null);

  const addProduct = () => {
    if (products.length < 5) {
      setProducts([...products, { name: '', amount: '', unit: 'ml', price: '' }]);
    }
  };

  const handleChange = (index: number, field: string, value: string) => {
    const updated = [...products];
    updated[index][field as keyof typeof updated[0]] = value;
    setProducts(updated);
  };

  const resetRow = (index: number) => {
    const updated = [...products];
    updated[index] = { name: '', amount: '', unit: 'ml', price: '' };
    setProducts(updated);
  };

  const removeRow = (index: number) => {
    const updated = products.filter((_, i) => i !== index);
    setProducts(updated);
  };

  const calculate = () => {
    const computedResults = products.map((p, index) => {
      const amount = parseFloat(p.amount);
      const price = parseFloat(p.price);
      if (!amount || !price) return { pricePerUnit: Infinity, index };
      return { pricePerUnit: price / amount, index };
    }).sort((a, b) => a.pricePerUnit - b.pricePerUnit);

    setResults(computedResults);
  };

  return (
    <div className=" compare max-w-4xl mx-auto p-4 space-y-6">
      <h1 className="text-3xl">เปรียบเทียบราคาสกินแคร์</h1>
      {products.map((product, index) => (
        <div key={index} className="grid md:grid-cols-[1fr_1fr_1fr_1fr_auto] gap-4 items-center ">
          <input
            type="text"
            placeholder="ชื่อสินค้า"
            value={product.name}
            onChange={(e) => handleChange(index, 'name', e.target.value)}
            className="border rounded p-2 w-full"
          />
          <input
            type="number"
            placeholder="ปริมาณ"
            value={product.amount}
            onChange={(e) => handleChange(index, 'amount', e.target.value)}
            className="border rounded p-2 w-full"
          />
          <select 
            value={product.unit}
            onChange={(e) => handleChange(index, 'unit', e.target.value)}
            className="border rounded p-2 w-full"
          >
            <option value="ml" >ml/มิลลิตร</option>
            <option value="g" >g/กรัม</option>
          </select>
          <input
            type="number"
            placeholder="ราคา"
            value={product.price}
            onChange={(e) => handleChange(index, 'price', e.target.value)}
            className="border rounded p-2 w-full"
          />
          <div className="flex gap-2 ">
            <button
              onClick={() => resetRow(index)}
              className="reset px-4 py-2 rounded "
            >
              รีเซ็ต
            </button>
            <button
              onClick={() => removeRow(index)}
              className="delete px-4 py-2 rounded "
            >
              ลบสินค้า
            </button>
          </div>
        </div>
      ))}
      <div className="flex gap-2">
        <button
          onClick={calculate}
          className="confirm  px-4 py-2 rounded"
        >
          ยืนยัน
        </button>
        <button
          onClick={addProduct}
          disabled={products.length >= 5}
          className="add  px-4 py-2 rounded"
        >
          เพิ่มสินค้า
        </button>  
      </div>
      
      <h2 className="text-3xl ">ผลลัพธ์ (เรียงลำดับตามราคา ถูก)</h2>

      {results && (
        <div className="space-y-2 mt-6">
          
          {results.map((result, rank) => {
            const name = products[result.index].name || `สินค้า #${result.index + 1}`;
            return (
              <div key={rank}>
                {name} - {result.pricePerUnit.toFixed(2)} บาท / 1 {products[result.index].unit}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

