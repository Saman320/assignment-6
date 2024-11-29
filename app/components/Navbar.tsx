"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white py-4 px-8">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left Side: Logo */}
        <div className="text-2xl font-bold">
          <span className="text-red-500">Coders</span>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="block md:hidden text-gray-400 hover:text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Center: Search Bar */}
        <div className="relative hidden md:block flex-1 mx-8">
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-700 text-white py-2 px-4 rounded w-full focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <svg
            className="absolute right-3 top-3 h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 15l5 5m-5-5a7 7 0 1114-14 7 7 0 01-14 14z"
            />
          </svg>
        </div>

        {/* Right Side: Navigation Links */}
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute md:static top-16 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent md:flex gap-4 text-lg items-center px-6 md:px-0`}
        >
          <li>
            <Link href="/" className="hover:text-red-500 block py-2">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-red-500 block py-2">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-red-500 block py-2">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
