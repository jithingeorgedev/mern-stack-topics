'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-black text-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold">MERN Stack Library</div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            ☰
          </button>
        </div>
        <div className={`md:flex gap-6 ${isOpen ? 'block' : 'hidden'} md:block`}>
          {/* <a href="#" className="hover:text-gray-400">Home</a>
          <a href="#features" className="hover:text-gray-400">Add topics</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a> */}
        </div>
      </div>
    </nav>
  );
}
