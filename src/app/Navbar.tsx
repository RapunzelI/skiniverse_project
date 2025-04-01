"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

// icons
import { IoMenu } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { GoHome } from "react-icons/go";
import { IoIosGitCompare } from "react-icons/io";
import { AiOutlineDeploymentUnit, AiOutlineProduct } from "react-icons/ai";
import { TbLayoutDashboard } from "react-icons/tb";
import { FaArrowUp } from "react-icons/fa6";

export default function Navbar() {
  const [isSideMenuOpen, setSideMenu] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);

  function openSideMenu() {
    setSideMenu(true);
  }

  function closeSideMenu() {
    setSideMenu(false);
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className="header md:p-2.5 sm:p-4 md:flex md:justify-between md:items-center z-50 bg-[#f2dfcf] shadow-md" 
      suppressHydrationWarning>
        {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}

        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="logo text-4xl font-bold xl:mr-auto xl:ml-10" 
          suppressHydrationWarning>
            Skiniverse
          </a>

          <div className="hidden md:flex text-black ml-auto">
            <div className="container flex justify-center">
              <div className="flex text-center whitespace-nowrap gap-10 font-medium py-4 text-blackish mr-10">
                <Link className="navbar_link relative" href="/knowledge">
                  คลังความรู้
                </Link>
                <Link className="navbar_link relative" href="/compare">
                  เทียบราคา
                </Link>
                <Link className="navbar_link relative" href="/ingredients">
                  ส่วนผสม
                </Link>
                <Link className="navbar_link relative" href="/products">
                  ผลิตภัณฑ์
                </Link>
              </div>
              <div className="w-full sm:w-[250px] md:w-[50%] relative sm:pb-0 m-auto">
                <input
                  className="search focus:outline-[#b8a5d5] border-gray-400 border p-2 px-10 rounded-lg w-full text-black"
                  type="text"
                  suppressHydrationWarning
                  placeholder="ค้นหา..."
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

      {/* ปุ่ม Scroll to Top */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-black text-white p-3 rounded-full shadow-lg hover:bg-[#f2dfcf] hover:text-[#a087c6] transition-all"
          title="เลื่อนขึ้นด้านบน"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </>
  );
}

function MobileNav({ closeSideMenu }: { closeSideMenu: () => void }) {
  return (
    <div className="fixed left-0 top-0 z-50 flex h-full min-h-screen w-full justify-end bg-black/60 md:hidden">
      <div className="h-full w-[65%] bg-white px-4 py-4 relative z-50">
        <div className="flex justify-end">
          <AiOutlineClose onClick={closeSideMenu} className="cursor-pointer text-4xl" />
        </div>
        <div className="flex flex-col gap-6 mt-6">
          <div className="w-full sm:w-[250px] md:w-[50%] relative sm:pb-0">
            <input
              className="border-gray-200 border p-2 px-10 rounded-lg w-full"
              type="text"
              placeholder="ค้นหา..."
            />
            <FiSearch className="absolute left-2.5 top-0 mr-3 mt-3 text-gray-400" size={20} />
          </div>

          <div className="flex flex-col gap-4 ml-[15px]">
            <Link className="navbar_link relative flex flex-row items-center space-x-2" href="/">
              <GoHome />
              <span>หน้าหลัก</span>
            </Link>
            <Link className="navbar_link relative flex flex-row items-center space-x-2" href="/knowledge">
              <TbLayoutDashboard />
              <span>คลังความรู้</span>
            </Link>
            <Link className="navbar_link relative flex flex-row items-center space-x-2" href="/compare">
              <IoIosGitCompare />
              <span>เทียบราคา</span>
            </Link>
            <Link className="navbar_link relative flex flex-row items-center space-x-2" href="/ingredients">
              <AiOutlineDeploymentUnit />
              <span>ส่วนผสม</span>
            </Link>
            <Link className="navbar_link relative flex flex-row items-center space-x-2" href="/products">
              <AiOutlineProduct />
              <span>ผลิตภัณฑ์</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
