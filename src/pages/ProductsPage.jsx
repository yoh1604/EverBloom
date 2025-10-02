// src/App.jsx

import Navbar from './../components/Navbar';
import ProductCard from './../components/ProductCard'; // <-- Pastikan namanya benar
import { motion } from 'framer-motion';

// ... (data 'products' Anda) ...
const products = [
  {
    id: 1,
    imageUrl: "/1_money.jpeg",
    title: "Buket Uang Eksklusif",
    description: "Hadiah anti gagal yang unik dan berkesan. Buket uang yang dirangkai elegan dalam nuansa ungu mewah. Pilihan terbaik untuk hadiah wisuda, pernikahan, atau perayaan besar lainnya."
  },
  {
    id: 2,
    imageUrl: "/large_blue-purple.jpeg",
    title: "Elegan Biru dan Ungu",
    description: "Kesan mewah dan tak terlupakan dari perpaduan biru royal dan ungu lembut. Cocok untuk hadiah ulang tahun, anniversary, atau untuk menunjukkan kekaguman."
  },
  {
    id: 3,
    imageUrl: "/large_blue-pink.jpeg",
    title: "Euforia Biru dan Pink",
    description: "Tampil beda dengan perpaduan warna biru dan pink yang vibrant di atas latar daun tropis. Pilihan tepat untuk merayakan pencapaian yang penuh semangat."
  },
  {
    id: 4,
    imageUrl: "/medium-blue.jpeg",
    title: "Tulip Biru dan Putih",
    description: "Klasik namun modern, kombinasi tulip biru dan putih dalam balutan hitam elegan. Sempurna sebagai ucapan selamat, hadiah korporat, atau bingkisan istimewa untuk pria."
  },
  {
    id: 5,
    imageUrl: "/medium-green.jpeg",
    title: "Kesegaran Hijau dan Putih",
    description: "Hadirkan nuansa segar dan menenangkan dengan rangkaian bunga hijau limau dan putih bersih. Ideal untuk ucapan lekas sembuh atau sebagai dekorasi penyemangat."
  },
  {
    id: 6,
    imageUrl: "/medium-pink.jpeg",
    title: "Karangan Merah Muda Manis",
    description: "Ungkapkan perasaan manis dengan sentuhan feminin dari buket bernuansa merah muda ini. Sangat cocok untuk hadiah kelulusan, ulang tahun sahabat, atau kejutan romantis."
  },
  
  {
    id: 7,
    imageUrl: "/small-yellow.jpeg",
    title: "Ceria Kuning dan Peach",
    description: "Sebuah buket mini yang ceria untuk mencerahkan hari siapa pun. Pas sebagai ucapan terima kasih, hadiah penyemangat, atau bingkisan 'just because'."
  }
  
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Jarak waktu antar kartu
    },
  },
};

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8F7F3] to-bg[#FFA2A0] lg:pt-10">
      <main className="p-8">
        {/* ... (bagian welcome page) ... */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {products.map((product) => (
            <ProductCard // <-- Pastikan namanya benar
              key={product.id}
              imageUrl={product.imageUrl}
              title={product.title}
              description={product.description}
            />
          ))}
        </motion.div>
      </main>
    </div>
  );
}

export default App;