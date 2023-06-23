import Hero from "./components/Hero";
import OurProducts from "./components/OurProducts";
import WhyUs from "./components/WhyUs";

export default function HomePage() {
  return (
    <div className="p-page">
      <div className="absolute -z-10 top-0 w-full h-full left-0">
        <img src="/images/hero.png" alt="" />
        <div className="absolute top-[50vh] left-0 w-full h-[150vh] bg-gradient-to-b from-transparent via-primary to-transparent opacity-30" />
        <img src="/images/water-bg.webp" alt="" />
      </div>
      <Hero />
      <WhyUs />
      <OurProducts />
    </div>
  );
}
