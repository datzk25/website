"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Giả lập kiểm tra (thay bằng API thật sau)
    if (email === "admin" && password === "admin") {
      // Tạo cookie session giả (thực tế dùng NextAuth)
      document.cookie = "admin_session=true; path=/";
      router.push("/admin");
    } else {
      setError("Sai tài khoản hoặc mật khẩu");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-main">
      <div className="glass p-8 rounded-2xl w-full max-w-md">
        <div className="text-center mb-6">
          <i className="fas fa-gamepad text-4xl text-cyan-400"></i>
          <h1 className="text-2xl font-bold mt-2">Đăng nhập Admin</h1>
          <p className="text-gray-400 text-sm">Nhập thông tin để truy cập hệ thống quản trị</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Tên đăng nhập</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition"
              placeholder="admin"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Mật khẩu</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition"
              placeholder="••••••••"
            />
          </div>
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold hover:scale-105 transition"
          >
            Đăng nhập
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-400">
          Tài khoản mặc định: <span className="text-cyan-400">admin/admin</span>
        </p>
      </div>
    </div>
  );
}
