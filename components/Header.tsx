"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle mobile menu
  const [active, setActive] = useState("Company"); // Track active menu item

  // Menu items array
  const menuItems = ["Company", "Solutions", "Products", "Academy", "Service"];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="flex justify-between items-center py-4 px-6 sm:px-10 md:px-16 lg:px-20">
        {/* Logo */}
        <div className="relative w-20 h-10 sm:w-28 sm:h-14">
          <Image
            src="/logo.png"
            alt="Company Logo"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-semibold">
          {menuItems.map((item) => (
            <li
              key={item}
              className={`cursor-pointer hover:text-yellow-400 transition duration-300 ${
                active === item ? "text-yellow-500" : ""
              }`}
              onClick={() => setActive(item)}
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Search Icon */}
        <div className="hidden md:block relative w-6 h-6 cursor-pointer hover:scale-110 transition-transform duration-300">
          <Image
            src="/searchIcon.png"
            layout="fill"
            alt="Search Icon"
            objectFit="contain"
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          aria-label="Toggle Menu"
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <XMarkIcon className="w-6 h-6 text-gray-700" />
          ) : (
            <Bars3Icon className="w-6 h-6 text-gray-700" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white border-t shadow-lg z-50">
          <ul className="flex flex-col gap-4 py-4 px-6 text-gray-700 font-semibold">
            {menuItems.map((item) => (
              <li
                key={item}
                className={`cursor-pointer hover:text-yellow-400 transition duration-300 ${
                  active === item ? "text-yellow-500" : ""
                }`}
                onClick={() => {
                  setActive(item);
                  setIsOpen(false); // Close menu on selection
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
