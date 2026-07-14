"use client";
import { useEffect, useRef } from "react";
import StatsCard from "@/components/admin/StatsCard";
import RecentOrders from "@/components/admin/RecentOrders";

export default function AdminDashboard() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Tổng quan</h2>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatsCard title="Doanh thu hôm nay" value="12,500,000₫" icon="fa-coins" color="text-yellow-400" change="+15.2%" />
        <StatsCard title="Đơn hàng mới" value="47" icon="fa-shopping-bag" color="text-purple-400" change="+8%" />
        <StatsCard title="Khách hàng mới" value="23" icon="fa-user-plus" color="text-cyan-400" change="+12%" />
        <StatsCard title="Sắp hết hàng" value="12" icon="fa-exclamation-triangle" color="text-red-400" change="Cần nhập kho" negative />
      </div>

      {/* Biểu đồ (demo) */}
      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        <div className="glass p-4">
          <h3 className="font-bold mb-3">Doanh thu theo ngày</h3>
          <canvas id="revenueChart" height="180"></canvas>
        </div>
        <div className="glass p-4">
          <h3 className="font-bold mb-3">Đơn hàng theo tuần</h3>
          <canvas id="ordersChart" height="180"></canvas>
        </div>
      </div>

      {/* Bảng đơn hàng gần đây */}
      <RecentOrders />
    </div>
  );
}
