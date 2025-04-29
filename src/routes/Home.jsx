import BlogSection from "../components/home/BlogSection";
import HeroSection from "../components/home/HeroSection";
import PopularAirLines from "../components/home/PopularAirLines";
import TopDestinations from "../components/home/TopDestinations";
import WhyChooseUs from "../components/home/WhyChooseUs";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TopDestinations />
      <PopularAirLines />
      <BlogSection />
      <WhyChooseUs />
    </>
  );
}
