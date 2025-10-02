// src/Layout.jsx

import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8F7F3] to-[#FFA2A0]/30 lg:pt-10">
      <Navbar />
      <main className="p-8">
        <Outlet /> {/* <-- Konten halaman akan dirender di sini */}
      </main>
    </div>
  );
}

export default Layout;