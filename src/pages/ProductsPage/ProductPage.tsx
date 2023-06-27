import Hero from "./components/Hero";
import Products from "./components/Products";

export default function ProductPage() {
  return (
    <div className="p-page flex relative overflow-hidden flex-col items-center">
      <div className="absolute -z-10 top-0 w-full h-full left-0 mt-52">
        <img src="/images/bg-product.png" alt="bg-about" />
        <div className="absolute top-36 left-0 w-full h-[300vh] bg-gradient-to-b from-transparent via-primary to-transparent" />
        {/* <img src="/images/water-bg.webp" alt="" className="h-max" /> */}
      </div>
      <Hero />
      <Products />
    </div>
  );
}
