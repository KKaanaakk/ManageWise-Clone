"use client";

import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import logo from '../../public/logo.png'; 
import img from "../../public/herosectionimage.webp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-between items-center w-full p-4 bg-[#FDF2EC]">
      <img src={logo.src} className="w-52" />
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-2xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <div className={`h-full flex-col md:flex-row md:flex justify-end items-center gap-4 ${isOpen ? 'flex' : 'hidden'} md:flex`}>
        <Link  href="#features" className="hover:text-[#8247ff]">
          Features
        </Link>
        <div className="h-1 w-1 bg-gray-300 md:hidden" />
        <Link href="#faq" className="hover:text-[#8247ff]">
          FAQ
        </Link>
        <div className="h-1 w-1 bg-gray-300 md:hidden" />
        <Link href="#pricing" className="hover:text-[#8247ff]">
          Pricing
        </Link>
        <div className="h-1 w-1 bg-gray-300 md:hidden" />
        <Link href="#testimonials" className="hover:text-[#8247ff]">
          Testimonials
        </Link>
        <button className="px-4 py-2 rounded-lg duration-200 shadow font-medium ml-6 border bg-white hover:border-black">
          Buy Template
        </button>
      </div>
    </div>
  );
};

export default Navbar;
