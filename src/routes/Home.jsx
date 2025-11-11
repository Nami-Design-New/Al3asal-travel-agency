import BlogSection from "../components/home/BlogSection";
import HeroSection from "../components/home/HeroSection";
import PopularAirLines from "../components/home/PopularAirLines";
import TopDestinations from "../components/home/TopDestinations";
import WhyChooseUs from "../components/home/WhyChooseUs";
import useGetHome from "../hooks/useGetHome";

export default function Home() {
  const { data, isLoading } = useGetHome();

  return (
    <>
      <HeroSection title={data?.title} description={data?.content} />
      <TopDestinations topSearched={data?.top_searched} />
      <PopularAirLines airlines={data?.airlines} />
      <BlogSection blogs={data?.latest_posts} />
      <WhyChooseUs whyChooseUs={data?.choose_us_cards} />
    </>
  );
}
