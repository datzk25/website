interface StatsCardProps {
  title: string;
  value: string;
  icon: string;
  color: string;
  change: string;
  negative?: boolean;
}

export default function StatsCard({ title, value, icon, color, change, negative }: StatsCardProps) {
  return (
    <div className="glass p-4 neon-glow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-400 text-xs">{title}</p>
          <p className="text-2xl font-bold text-white">{value}</p>
          <span className={`text-xs ${negative ? 'text-red-400' : 'text-green-400'}`}>
            <i className={`fas ${negative ? 'fa-arrow-down' : 'fa-arrow-up'} mr-1`}></i>
            {change}
          </span>
        </div>
        <i className={`fas ${icon} text-3xl ${color} opacity-50`}></i>
      </div>
    </div>
  );
}
