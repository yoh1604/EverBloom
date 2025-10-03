// src/components/Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom'; // 👈 1. Impor 'Link' dari react-router-dom

// HAPUS import WelcomePage dan ProductsPage, tidak diperlukan di sini

function Navbar() {
  return (
    <nav className="
      fixed top-0 w-full bg-white/10 shadow-md p-2 flex justify-between items-center
      lg:max-w-7xl lg:mx-auto lg:bg-white/20 lg:backdrop-blur-lg lg:rounded-xl lg:shadow-lg lg:border lg:border-white/30
    ">
      
      <div>
        <Link to="/">
          <img src="/logo.png" alt="Everbloom Logo" className="h-14" />
        </Link>
      </div>

      {/* Bagian Tengah: Link Navigasi */}
      <div className="flex items-center text-sm space-x-2 md:space-x-6">
        {/* 👇 2. Ganti <a> dengan <Link> dan 'href' dengan 'to' */}
        <Link to="/" className="font-normal text-[#3C3E66] p-3 rounded-lg hover:bg-white/20 transition-colors">
          Home
        </Link>
        <Link to="/products" className="font-normal text-[#3C3E66] p-3 rounded-lg hover:bg-white/20 transition-colors">
          Produk
        </Link>
        <a href="/contact" className="font-normal text-[#3C3E66] p-3 rounded-lg hover:bg-white/20 transition-colors">
          Kontak
        </a>
      </div>
      
    </nav>
  );
}

export default Navbar;