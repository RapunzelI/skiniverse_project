"use client";
import Link from "next/link";

// icon
import { IoMenu } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { GoHome } from "react-icons/go";
import { IoIosGitCompare } from "react-icons/io";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
import { AiOutlineProduct } from "react-icons/ai";

import { useState } from "react";

  export default function Navbar() {
    const [isSildeMenuOpen, setSideMenue] = useState(false);
    function openSideMenu() {
      setSideMenue(true);
    }
    function closeSideMenu() {
      setSideMenue(false);
    }
  //sticky top-0 
    return (
      <nav className="header md:p-2.5 sm:p-4 md:flex md:justify-between md:items-center z-50 bg-[#f2dfcf] ">
        {isSildeMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}
  
        <div className="container mx-auto flex justify-between items-center">
          {/* ทำให้ Skiniverse อยู่ตรงกลางมากขึ้น */}
          <a href="/" className="logo text-4xl font-bold xl:mr-auto xl:ml-10 ">
            Skiniverse
          </a>
  
          {/* เมนูหลัก */}
          <div className="hidden md:flex text-black ml-auto">
            <div className="container flex justify-center">
              <div className="flex w-fit gap-10 font-medium py-4 text-blackish mr-10">
                <Link className="navbar_link relative" href="/dashboard">
                  Dashboard
                </Link>
                <Link className="navbar_link relative" href="/compare">
                  Compare
                </Link>
                <Link className="navbar_link relative" href="/ingredients">
                  Ingredients
                </Link>
                <Link className="navbar_link relative" href="/products">
                  Products
                </Link> 
            </div>
            <div className="w-full sm:w-[250px] md:w-[50%] relative sm:pb-0 m-auto">
              <input
                className="focus:outline-[#ed9e59] border-gray-200 border p-2 px-10 rounded-lg w-full text-black"
                type="text"
                placeholder="Search me..."
                
              />
              <FiSearch
                className="absolute left-2.5 top-0 mr-3 mt-3 text-gray-400"
                size={20}
              />
              </div>
            </div>
  
            
          </div>
  
          <IoMenu onClick={openSideMenu} className="cursor-pointer text-4xl md:hidden" />
        </div>
      </nav>
    );
  }

function MobileNav({ closeSideMenu }: { closeSideMenu: () => void }) {
  return (
    <div className="fixed left-0 top-0 z-50 flex h-full min-h-screen w-full justify-end bg-black/60 md:hidden ">
      <div className="h-full w-[65%] bg-white px-4 py-4 relative z-50">
        <div className="flex justify-end ">
          <AiOutlineClose onClick={closeSideMenu} className="cursor-pointer text-4xl " />
        </div>
        <div className="flex flex-col  gap-6 mt-6">

        <div className="w-full sm:w-[250px] md:w-[50%] relative sm:pb-0">
                    <input className="border-gray-200 border p-2 px-10 rounded-lg w-full" type="text" placeholder="Search me..." />
                    <FiSearch className="absolute left-2.5 top-0 mr-3 mt-3 text-gray-400" size={20} />
                  </div>

          <div className="flex flex-col gap-4 ml-[15px]">
            <Link className="navbar_link relative flex flex-row items-center space-x-2" href="/">
                <GoHome /><span>Home</span>
            </Link>
            <Link className="navbar_link relative flex flex-row items-center space-x-2" href="/dashboard">
                  Dashboard
                </Link>
            <Link className="navbar_link relative flex flex-row items-center space-x-2" href="/compare">
                <IoIosGitCompare /><span>Compare</span>
            </Link>
            <Link className="navbar_link relative flex flex-row items-center space-x-2" href="/ingredients">
                <AiOutlineDeploymentUnit /><span>Ingredient</span>
            </Link>
            <Link className="navbar_link relative flex flex-row items-center space-x-2" href="/products">
                <AiOutlineProduct /><span>Product</span>
            </Link>
          </div>

          
        </div>
      </div>
    </div>
  );
}