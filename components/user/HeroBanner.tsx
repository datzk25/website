"use client";
import { motion } from "framer-motion";

export default function HeroBanner() {
  return (
    <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-main"></div>
      <div className="relative z-10 text-center max-w-4xl px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold"
        >
          <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Tài khoản game
          </span>
          <br />
          <span className="text-white">chất lượng cao</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto"
        >
          Mua bán tài khoản game, vật phẩm, dịch vụ cày thuê và phần mềm uy tín số 1 Việt Nam.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          <a href="/products" className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold hover:scale-105 transition shadow-lg shadow-cyan-500/30">
            <i className="fas fa-rocket mr-2"></i> Khám phá ngay
          </a>
          <a href="#" className="px-8 py-4 rounded-full glass text-white border border-white/20 hover:bg-white/10 transition">
            <i className="fas fa-play-circle mr-2"></i> Xem demo
          </a>
        </motion.div>
      </div>
    </section>
  );
}
