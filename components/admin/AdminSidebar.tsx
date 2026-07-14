"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  ShoppingBag,
  Box,
  Tags,
  CreditCard,
  Settings,
  LogOut,
} from "lucide-react";

const menuItems = [
  { icon: LayoutDashboard, label: "Tổng quan", href: "/admin" },
  { icon: Users, label: "Khách hàng", href: "/admin/customers" },
  { icon: ShoppingBag, label: "Đơn hàng", href: "/admin/orders" },
  { icon: Box, label: "Sản phẩm", href: "/admin/products" },
  { icon: Tags, label: "Danh mục", href: "/admin/categories" },
  { icon: CreditCard, label: "Nạp tiền", href: "/admin/deposits" },
  { icon: Settings, label: "Cấu hình", href: "/admin/settings" },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 glass border-r border-white/10 p-4 flex flex-col h-full">
      <div className="flex items-center gap-2 mb-8">
        <i className="fas fa-gamepad text-2xl text-cyan-400"></i>
        <span className="text-xl font-bold text-cyan-400 font-orbitron">Admin</span>
      </div>
      <nav className="flex-1 space-y-1">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                isActive
                  ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                  : "text-gray-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
      <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-white/5 hover:text-red-400 transition mt-4">
        <LogOut className="w-5 h-5" />
        <span>Đăng xuất</span>
      </button>
    </aside>
  );
}
