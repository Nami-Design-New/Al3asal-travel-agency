import HeroSection from "../components/home/HeroSection";
import HowWeWorks from "../components/home/HowWeWorks";
import TopDestinations from "../components/home/TopDestinations";
// import OffersSection from "../components/home/offers";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TopDestinations />
      {/* <OffersSection /> */}
      <HowWeWorks />
    </>
  );
}
