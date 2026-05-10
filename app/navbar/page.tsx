"use client";

import { useState } from "react";
import Link from "next/link";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleLightMode = () => {
    setDark(!dark);
  };

  return (
    <div className="sticky top-0 z-50 px-4 sm:px-6 lg:px-10 mb-10 md:mb-0">
      {/* NAVBAR */}
      <div className="lg:w-[800px] lg:mx-auto flex items-center justify-between bg-gradient-to-r from-gray-800 to-gray-900 border-t-2 border-gray-700 rounded-lg py-2 px-4 mt-3 shadow-lg">
        {/* LOGO */}
        <h1 className="text-lg sm:text-xl font-bold">Portfolio.</h1>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-6 text-gray-300">
          <Link href="#home" className="hover:text-amber-500">
            Home
          </Link>
          <Link href="#about" className="hover:text-amber-500">
            About
          </Link>
          <Link href="#skills" className="hover:text-amber-500">
            Skills
          </Link>
          <Link href="#projects" className="hover:text-amber-500">
            Projects
          </Link>
          <Link href="#contact" className="hover:text-amber-500">
            Contact
          </Link>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">
          {/* TOGGLE */}
          <div className=" cursor-pointer">
            <Link href="https://x.com/Chandan11844766">
              <FaSquareXTwitter size={30} />
            </Link>
          </div>

          {/* HIRE BUTTON (hide on small screens) */}
          <Link
            href="https://wa.me/9137671071?text=Hi%20Chandan%2C%20I%20want%20to%20hire%20you"
            target="_blank"
            className="hidden sm:block font-bold text-sm sm:text-base bg-gradient-to-r from-amber-600 to-amber-500 px-4 py-1 rounded-3xl"
          >
            Hire Me
          </Link>

          {/* HAMBURGER */}
          <div
            className="lg:hidden cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className="ri-menu-line text-2xl"></i>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="lg:hidden mt-2 bg-gray-900 rounded-lg p-5 flex flex-col gap-4 text-gray-300">
          <Link href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link href="#about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link href="#skills" onClick={() => setMenuOpen(false)}>
            Skills
          </Link>
          <Link href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </Link>
          <Link href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>

          <Link
            href="https://wa.me/9137671071?text=Hi%20Chandan%2C%20I%20want%20to%20hire%20you"
            target="_blank"
            className="mt-2 text-center font-bold bg-gradient-to-r from-amber-600 to-amber-500 px-4 py-2 rounded-3xl"
          >
            Hire Me
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
