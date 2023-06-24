import Task from "./components/Task";
import Team from "./components/Team";
import Hero from "./components/hero";

export default function AboutPage() {
  return (
    <div className="p-page">
      <div className="absolute -z-10 top-0 w-full h-full left-0 mt-20">
        <img src="/images/bg-about.png" alt="bg-about" />
        <div className="absolute top-0 left-0 w-full h-[150vh] bg-gradient-to-b from-transparent via-primary to-transparent opacity-30" />
        <img src="/images/water-bg.webp" alt="" className="" />
      </div>
      <Hero />
      <Task />
      <Team />
    </div>
  );
}
