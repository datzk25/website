import HeroBanner from "@/components/user/HeroBanner";
import CategoryGrid from "@/components/user/CategoryGrid";

export default function HomePage() {
  return (
    <div className="container mx-auto px-4">
      <HeroBanner />
      <CategoryGrid />
    </div>
  );
}
