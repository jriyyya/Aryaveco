import MaterialIcon from "../../../common/MaterialIcon";

export default function Hero() {
  return (
    <section className="mt-28 mx-16 flex flex-col gap-y-8 items-start">
      <div className="text-5xl font-semibold tracking-wide flex flex-col gap-y-3">
        <span className="text-primary">From Air to Water:</span>
        <span>Harnessing Nature's Gift for Clean,</span>
        <span>Refreshing Hydration!</span>
      </div>
      <button className="font-medium bg-gradient-to-l from-primary to-secondary p-3 rounded-md text-back flex flex-row items-center gap-x-2 drop-shadow-lg hover:-translate-y-1 duration-300">
        Explore our products <MaterialIcon codepoint="e5c8" />
      </button>
    </section>
  );
}
