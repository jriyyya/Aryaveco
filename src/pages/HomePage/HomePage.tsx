import Hero from "./components/Hero";
import OurProducts from "./components/OurProducts";
import Problems from "./components/Problems";
import Solutions from "./components/Solutions";
import Testimonials from "./components/Testimonials";
import WhyUs from "./components/WhyUs";

export default function HomePage() {
  return (
    <div className="p-page relative overflow-hidden">
      <div className="absolute -z-10 top-0 w-full h-full left-0">
        <img src="/images/hero.png" alt="" className="mobile:hidden" />
        <div className="absolute top-[50vh] mobile:top-0 left-0 w-full h-[150vh] mobile:h-[200vh] bg-gradient-to-b from-transparent via-primary to-transparent opacity-30" />
        <img
          src="/images/water-bg.webp"
          alt=""
          className="h-max mobile:hidden"
        />
        <img
          src="/images/water-bg.webp"
          alt=""
          className="h-max mobile:hidden"
        />
      </div>
      <Hero />
      <Problems />
      <Solutions />
      <WhyUs />
      <OurProducts />
      <Testimonials />
    </div>
  );
}
