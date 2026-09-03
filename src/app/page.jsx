import AboutUsSEction from "@/Components/Homepage/AboutUsSEction";
import FeaturesSection from "@/Components/Homepage/FeaturesSection";
import HeroSection from "@/Components/Homepage/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutUsSEction />
      <FeaturesSection />
    </div>
  );
}
