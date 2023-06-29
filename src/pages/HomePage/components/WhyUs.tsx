import { twMerge } from "tailwind-merge";
import MaterialIcon from "../../../common/MaterialIcon";

const reasons = [
  "Complies with UN SDG Goals 6, 11, 12, 13, 14, 15",
  "Funded by i. Marl Ventures ii. Startup India",
  "CE Certification",
  "Amrit 2.0 Mission, Ministry of Housing and Urban Affairs",
  "Indian patent",
];

const features = [
  {
    codepoint: "e858",
    title: "Real time Monitoring",
  },
  {
    codepoint: "ea0b",
    title: "Most energy efficient",
  },
  {
    codepoint: "e322",
    title: "Use of AI and IOT",
  },
  {
    codepoint: "e23b",
    title: "Net zero water",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-background w-full px-24 py-16 mobile:py-8 mobile:px-6 mt-[45vh] border-primary border rounded-3xl flex flex-col justify-center gap-y-12 bg-opacity-60 backdrop-blur-md mobile:gap-y-16">
      <div className="flex flex-col mobile:gap-y-4 gap-y-6">
        <div className="bg-black text-white w-max px-2 py-1 rounded-xl self-center text-xl">
          Why Us?
        </div>
        <div className="flex widescreen:flex-row mobile:flex-col items-center">
          {reasons.map((reason, i) => (
            <div className="mobile:w-[85%]">
              <div
                key={i}
                className={twMerge(
                  " mobile:hidden text-center tracking-wider text-sm font-semibold px-6 relative flex-1 flex flex-col justify-center",
                  i != reasons.length - 1 &&
                    "after:absolute after:w-[2px] after:h-2/3 after:right-0 after:top-1/2 after:-translate-y-1/2 after:bg-front"
                )}
              >
                {reason}
              </div>
              <div className="widescreen:hidden text-center py-4 border-b-2 border-front text-front font-semibold">
                {reason}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <div className="text-3xl font-semibold text-front self-center mobile:text-center">
          Checkout Our features
        </div>
        <div className="flex flex-row self-center gap-x-4 pt-4">
          <div className="w-[4vw] self-center bg-black h-1" />
          <div className="w-[4vw] self-center bg-black h-1" />
        </div>
        <div className="flex flex-row justify-around widescreen:pt-20 mobile:pt-10 mobile:flex-wrap">
          {features.map((feature, i) => (
            <div
              key={i}
              className="flex flex-col justify-center items-center gap-y-12 mobile:w-1/2 mobile:gap-y-6 mobile:py-4"
            >
              <div className="bg-primary text-back p-6 flex justify-center items-start mobile:items-center rotate-45 w-[6vw] h-[6vw] shadow-[rgba(0,_164,_255,_0.4)_8px_8px_10px_-1px] hover:shadow-[rgba(0,_164,_255,_0.6)_10px_10px_15px_-1px] hover:cursor-pointer duration-300 hover:-translate-y-2">
                <MaterialIcon
                  codepoint={feature.codepoint}
                  className="text-[3em] -rotate-45 mobile:text-[2em]"
                />
              </div>
              <div className="font-medium text-center">{feature.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
