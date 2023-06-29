import { Link } from "react-router-dom";
import MaterialIcon from "../../../common/MaterialIcon";

export default function Hero() {
  return (
    <section className="mt-28 widescreen:mx-16 flex flex-col gap-y-8 items-start mobile:text-center">
      <div className="text-5xl mobile:text-2xl font-semibold tracking-wide flex flex-col gap-y-3 mobile:gap-y-1">
        <span className="text-primary mobile:text-3xl">From Air to Water:</span>
        <span>Harnessing Nature's Gift for Clean,</span>
        <span>Refreshing Hydration!</span>
      </div>
      <Link
        to="/products"
        className=" mobile:self-center font-medium bg-gradient-to-l from-primary to-secondary p-3 rounded-md text-back flex flex-row items-center gap-x-2 
        drop-shadow-lg hover:-translate-y-1 duration-300"
      >
        Explore our products <MaterialIcon codepoint="e5c8" />
      </Link>
    </section>
  );
}
