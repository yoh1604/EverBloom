// src/components/ProductCard.jsx

import React from 'react';
import { motion } from 'framer-motion';

// Varian animasi untuk setiap kartu (item)
const itemVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5 } 
  },
};

function ProductCard({ imageUrl, title, description }) {
  return (
    // Gunakan 'variants' yang sudah didefinisikan
    <motion.div
      variants={itemVariants}
      className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300"
    >
      <img
        className="w-full h-40 object-cover"
        src={imageUrl}
        alt={title}
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold font-sans text-gray-800">{title}</h3>
        <p className="mt-1 text-sm font-sans text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
}

export default ProductCard;