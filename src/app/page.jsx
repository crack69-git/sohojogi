import AboutUsSEction from "@/Components/Homepage/AboutUsSEction";
import ContactCard from "@/Components/Homepage/ContactCard";
import FeaturesSection from "@/Components/Homepage/FeaturesSection";
import HeroSection from "@/Components/Homepage/HeroSection";
import TestimonialSection from "@/Components/Homepage/TestimonialSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutUsSEction />
      <FeaturesSection />
      <TestimonialSection />
      <ContactCard />
    </div>
  );
}
