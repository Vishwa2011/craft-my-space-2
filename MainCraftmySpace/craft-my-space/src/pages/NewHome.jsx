// LeftNavbar.jsx
import React from 'react';
import { FiMenu, FiShoppingCart, FiSearch } from 'react-icons/fi'; // Feather Icons

const LeftNavbar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 bg-black flex flex-col justify-between items-center py-6 z-50">
      {/* Top Logo or Brand Name */}
      <div className="rotate-[-90deg] text-white text-xl tracking-widest font-semibold">
        KRIEDER
      </div>

      {/* Middle Icons */}
      <div className="flex flex-col gap-6">
        <FiMenu className="text-white text-2xl cursor-pointer" />
      </div>

      {/* Bottom Icons */}
      <div className="flex flex-col gap-6 mb-4">
        <FiShoppingCart className="text-white text-xl cursor-pointer" />
        <FiSearch className="text-white text-xl cursor-pointer" />
      </div>
    </div>
  );
};

export default LeftNavbar;
