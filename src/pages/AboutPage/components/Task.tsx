import { twMerge } from "tailwind-merge";
import MaterialIcon from "../../../common/MaterialIcon";

const problems = [
  {
    title: "20%",
    description:
      "World population lack access to safe and clean drinking water",
  },
  {
    title: "15 M",
    description: "Children are dying annually due to water-related diseases",
  },
  {
    title: "700 M",
    description: "Worldwide will experience with water scarcity by 2020",
  },
  {
    title: "2.3 B",
    description:
      "World population lack access to safe and clean drinking water",
  },
];

export default function Task() {
  return (
    <section className="bg-background w-full px-24 py-16 mt-[30vh] border-primary border rounded-3xl flex flex-col justify-center gap-y-8 mobile:gap-y-2 bg-opacity-60 backdrop-blur-md mobile:px-4 mobile:py-8">
      <div className="bg-black text-white w-max px-2 py-1 rounded-xl self-center text-xl mobile:text-lg">
        Why do we do this?
      </div>
      <div className="flex flex-col justify-center gap-y-16 mobile:gap-y-8">
        <div className="flex flex-col  gap-y-4 mobile:gap-y-2">
          <div className="text-3xl font-semibold text-front self-center text-center mobile:text-2xl">
            Problems we aim to solve
          </div>
          <div className="flex flex-row self-center gap-x-4">
            <div className="w-[4vw] self-center bg-black h-1" />
            <div className="w-[4vw] self-center bg-black h-1" />
          </div>
        </div>
        <div className="flex flex-row justify-around text-center mobile:flex-wrap mobile:gap-y-4">
          {problems.map((problem, i) => (
            <div key={i} className="w-[18%] flex flex-col gap-y-2 mobile:w-1/2">
              <div className="text-primary text-3xl font-bold">
                {problem.title}
              </div>
              <div className="font-semibold mobile:text-sm">
                {problem.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
