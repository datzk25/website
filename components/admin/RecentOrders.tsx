const orders = [
  { id: "#ORD-4829", customer: "Nguyễn Văn A", product: "Acc Valorant", total: "450,000đ", status: "Hoàn thành", statusColor: "green" },
  { id: "#ORD-5831", customer: "Trần Thị B", product: "Random FF Pool", total: "99,000đ", status: "Đang xử lý", statusColor: "yellow" },
  { id: "#ORD-7261", customer: "Lê Văn C", product: "Tool Auto Farm", total: "350,000đ", status: "Hoàn thành", statusColor: "green" },
  { id: "#ORD-8374", customer: "Phạm Thị D", product: "Acc Liên Quân VIP", total: "890,000đ", status: "Hủy", statusColor: "red" },
];

export default function RecentOrders() {
  return (
    <div className="glass p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-bold">📋 Đơn hàng gần đây</h3>
        <a href="/admin/orders" className="text-cyan-400 text-sm hover:underline">Xem tất cả</a>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="border-b border-white/10 text-gray-400">
            <tr>
              <th className="text-left py-2 px-2">Mã đơn</th>
              <th className="text-left py-2 px-2">Khách hàng</th>
              <th className="text-left py-2 px-2">Sản phẩm</th>
              <th className="text-left py-2 px-2">Tổng tiền</th>
              <th className="text-left py-2 px-2">Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b border-white/5 hover:bg-white/5 transition">
                <td className="py-2 px-2 font-mono text-xs">{order.id}</td>
                <td className="py-2 px-2">{order.customer}</td>
                <td className="py-2 px-2">{order.product}</td>
                <td className="py-2 px-2 font-bold text-cyan-400">{order.total}</td>
                <td className="py-2 px-2">
                  <span className={`badge-status bg-${order.statusColor}-500/20 text-${order.statusColor}-400`}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
