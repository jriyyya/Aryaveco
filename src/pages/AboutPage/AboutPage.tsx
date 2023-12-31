import Hero from "./components/Hero";
import Task from "./components/Task";
import Team from "./components/Team";

export default function AboutPage() {
  return (
    <div className="p-page overflow-hidden relative">
      <div className="absolute -z-10 top-0 w-full h-full left-0 mt-20">
        <img
          src="/images/bg-about.png"
          alt="bg-about"
          className="mobile:hidden"
        />
        <div className="absolute top-0 left-0 w-full h-[150vh] mobile:h-[200vh] bg-gradient-to-b from-transparent via-primary to-transparent opacity-30" />
        <img
          src="/images/water-bg.webp"
          alt=""
          className="h-max mobile:hidden"
        />
      </div>
      <Hero />
      <Task />
      <Team />
    </div>
  );
}
