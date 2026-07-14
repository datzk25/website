const categories = [
  { name: "Acc Liên Quân", icon: "fa-users" },
  { name: "Acc Free Fire", icon: "fa-fire" },
  { name: "Acc Roblox", icon: "fa-robot" },
  { name: "Acc Valorant", icon: "fa-crosshairs" },
  { name: "Acc Steam", icon: "fa-steam" },
  { name: "Random Acc", icon: "fa-dice" },
  { name: "Dịch vụ cày thuê", icon: "fa-headset" },
  { name: "Tool & phần mềm", icon: "fa-file-code" },
];

export default function CategoryGrid() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-6">Danh mục nổi bật</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {categories.map((cat) => (
          <a key={cat.name} href="#" className="glass p-4 text-center card-hover neon-glow">
            <i className={`fas ${cat.icon} text-4xl text-cyan-400 mb-2`}></i>
            <p className="font-semibold text-sm">{cat.name}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
