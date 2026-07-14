export default function Footer() {
  return (
    <footer className="glass border-t border-white/10 px-4 py-8 mt-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <i className="fas fa-gamepad text-3xl text-cyan-400"></i>
            <span className="text-xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">GameShop</span>
          </div>
          <p className="text-gray-400 text-sm">Shop tài khoản game & sản phẩm số premium số 1 Việt Nam.</p>
          <div className="flex gap-3 mt-4">
            <a href="#" className="text-gray-400 hover:text-cyan-400"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-gray-400 hover:text-cyan-400"><i className="fab fa-tiktok"></i></a>
            <a href="#" className="text-gray-400 hover:text-cyan-400"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-3">Danh mục</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-cyan-400">Tài khoản game</a></li>
            <li><a href="#" className="hover:text-cyan-400">Random Acc</a></li>
            <li><a href="#" className="hover:text-cyan-400">Dịch vụ cày thuê</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-3">Hỗ trợ</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-cyan-400">Hướng dẫn mua hàng</a></li>
            <li><a href="#" className="hover:text-cyan-400">Chính sách bảo mật</a></li>
            <li><a href="#" className="hover:text-cyan-400">Điều khoản sử dụng</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-3">Liên hệ</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><i className="fas fa-phone mr-2"></i> 1900 1234</li>
            <li><i className="fas fa-envelope mr-2"></i> support@gameshop.vn</li>
            <li><i className="fas fa-map-marker-alt mr-2"></i> Hà Nội, Việt Nam</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-sm text-gray-500 border-t border-white/10 pt-6 mt-6">
        &copy; 2026 GameShop Premium. All rights reserved.
      </div>
    </footer>
  );
}
