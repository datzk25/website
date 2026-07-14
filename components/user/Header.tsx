"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 glass border-b border-white/10 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <i className="fas fa-gamepad text-3xl text-cyan-400"></i>
          <span className="text-xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent font-orbitron hidden sm:inline">
            GameShop
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-gray-300">
          <Link href="/products" className="hover:text-cyan-400 transition">Sản phẩm</Link>
          <Link href="/deposit" className="hover:text-cyan-400 transition">Nạp tiền</Link>
          <Link href="/account" className="hover:text-cyan-400 transition">Tài khoản</Link>
        </nav>

        <div className="flex items-center gap-4">
          <button className="text-gray-300 hover:text-cyan-400">
            <i className="fas fa-moon text-xl"></i>
          </button>
          <Link href="/login" className="hidden sm:inline-block px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold hover:scale-105 transition">
            Đăng nhập
          </Link>
          <button className="md:hidden text-2xl text-gray-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-3 glass p-4 space-y-3">
          <Link href="/products" className="block hover:text-cyan-400">Sản phẩm</Link>
          <Link href="/deposit" className="block hover:text-cyan-400">Nạp tiền</Link>
          <Link href="/account" className="block hover:text-cyan-400">Tài khoản</Link>
          <Link href="/login" className="block px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-center">Đăng nhập</Link>
        </div>
      )}
    </header>
  );
}
