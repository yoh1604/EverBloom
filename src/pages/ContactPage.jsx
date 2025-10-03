// src/pages/ContactPage.jsx

import React from 'react';
import { motion } from 'framer-motion';

function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="max-w-6xl mx-auto text-[#3C3E66] p-8 lg:p-16 min-h-screen bg-gradient-to-b from-[#F8F7F3] to-bg[#FFA2A0]"
    >
      {/* --- Judul Halaman --- */}
      <div className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold font-serif">Hubungi Kami</h1>
        <p className="mt-4 text-lg font-sans text-[#3C3E66]/80">Kami senang mendengar dari Anda. Kirimkan pesan atau kunjungi kami</p>
      </div>

      {/* --- Kontainer Utama (Layout 2 Kolom di Layar Besar) --- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* --- Kolom Kiri: Info Kontak --- */}
        <div className="bg-white/20 backdrop-blur-lg rounded-xl shadow-lg p-8 space-y-6">
          <h2 className="text-2xl font-semibold font-serif">Info Kontak</h2>
          
          {/* Info Email */}
          <div className="flex items-start space-x-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            <div>
              <h3 className="font-semibold">Email</h3>
              <a href="mailto:everbloom825@gmail.com" className="[#3C3E66]/80 hover:[#3C3E66]">everbloom825<a className='font-serif'>@</a>gmail.com</a>
            </div>
          </div>

          {/* Info Telepon */}
          <div className="flex items-start space-x-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            <div>
              <h3 className="font-semibold">Telepon <a className='font-serif '>/</a> WhatsApp</h3>
              <a 
                href="https://wa.me/6281553550106" 
                target="_blank" 
                rel="noopener noreferrer"
                className=" hover:text-[#767894] hover:underline"
              >
                <a className='font-serif '>+</a>62 815 5355 0106
              </a>
            </div>
          </div>

          {/* Info Alamat */}
          <div className="flex items-start space-x-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            <div>
              <h3 className="font-semibold">Alamat Toko</h3>
              <p className="[#3C3E66]/80">Surabaya, Jawa Timur</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" // Anda bisa sesuaikan ukuran di sini
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" 
              />
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 12m-3 0a3 3 0 106 0 3 3 0 10-6 0" 
              />
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M16.5 7.5l0 .01" 
              />
            </svg>
            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg> */}
            <div>
              <h3 className="font-semibold">Instagram</h3>
              <a 
                href="instagram.com/ever.bloom8" 
                target="_blank" 
                rel="noopener noreferrer"
                className=" hover:text-[#767894] hover:underline"
              >
                <a className='font-serif '>@</a>
                ever.bloom8
              </a>
            </div>
          </div>
          {/* <div className="flex items-start space-x-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            <div>
              <h3 className="font-semibold">Tiktok</h3>
              <a 
                href="instagram.com/ever.bloom8" 
                target="_blank" 
                rel="noopener noreferrer"
                className=" hover:text-[#767894] hover:underline"
              >
                <a className='font-serif '>@</a>
                ever.bloom8
              </a>
            </div>
          </div> */}
        </div>

       
      </div>
    </motion.div>
  );
}

export default ContactPage;