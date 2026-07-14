"use client";
export default function AdminHeader() {
  return (
    <header className="glass border-b border-white/10 px-6 py-4 flex items-center justify-between">
      <h1 className="text-xl font-bold">Dashboard</h1>
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-400 hidden sm:inline">
          <i className="far fa-calendar-alt mr-1"></i> 14/07/2026
        </span>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
            A
          </div>
          <span className="hidden sm:inline font-semibold text-white">Admin</span>
        </div>
      </div>
    </header>
  );
}
