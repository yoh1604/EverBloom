// src/pages/WelcomePage.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { motion } from 'framer-motion'; 
import Navbar from '../components/Navbar';

function WelcomePage() {
    const [isRotated, setIsRotated] = useState(false);
    return (
        
        <div className="max-w-6xl mx-auto text-center text-[#3C3E66]">
        <div className="relative mx-auto w-32 h-32 lg:w-40 lg:h-40 mb-6 flex justify-center items-center">
            <img 
            src="/bg-logo.png" 
            alt="Logo Background" 
            className="absolute w-48 h-auto" 
            />

            <motion.img
            src="/flower_solo.png"
            alt="Everbloom Flower"
            className="absolute w-3/4 h-3/4 cursor-pointer" // Ukurannya lebih kecil dari latar
            onClick={() => setIsRotated(!isRotated)}
            animate={{ rotate: isRotated ? 360 : 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            />

        </div>
        <h1 className="text-4xl lg:text-6xl font-bold font-serif">
            Where Potential Blossoms
        </h1>
        <p className="mt-4 text-lg lg:text-xl font-light">
            Di Ever Bloom, kami merangkai lebih dari sekadar bunga. Kami merangkai momen, perasaan, dan kenangan yang akan mekar selamanya.
        </p>
        <Link to="/products">
            <button className="mt-8 bg-white text-[#F79B9C] font-semibold py-3 px-8 rounded-lg hover:bg-gray-200 transition-colors">
            Lihat Koleksi Kami
            </button>
        </Link>
        </div>
    );
}

export default WelcomePage;