import { twMerge } from "tailwind-merge";

const reasons = [
  {
    link: "https://s4z3h6y3.rocketcdn.me/wp-content/uploads/2019/11/Store-and-Conserve-Water.jpeg",
    description:
      "0% Water wastage- our AWGs don’t need any water source to generate drinking water.",
  },
  {
    link: "https://images.healthshots.com/healthshots/en/uploads/2021/11/19125831/child-and-water-1600x900.jpg",
    description:
      "Get UpTo 1000 Litres of pure & remineralised drinking water every day regardless of weather conditions.",
  },
  {
    link: "https://www.eicares.org/wp-content/uploads/2021/09/image_cleanwater-1.jpg",
    description:
      "Works at 30% Low humidity levels, and even in most arid environments.",
  },
  {
    link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxd04ooXes1-8pj1YmNBsdgCSIAsDtv8uXJQ&usqp=CAU",
    description:
      "100% Ensures the Safest & Purest Water Quality by meeting the highest quality standards",
  },
];

export default function Solutions() {
  return (
    <section className="bg-background w-full px-24 py-16 mobile:py-8 mobile:px-6 mt-[12vh] mobile:mt-14 border-primary border rounded-3xl flex flex-col justify-center gap-y-12 bg-opacity-60 backdrop-blur-md mobile:gap-y-16">
      <div className="flex flex-col mobile:gap-y-4 gap-y-12">
        <div className="flex flex-col">
          <div className="text-3xl font-semibold text-front self-center mobile:text-center mobile:text-2xl">
            Solutions We provide
          </div>
          <div className="flex flex-row self-center gap-x-4 pt-4">
            <div className="w-[4vw] self-center bg-black h-1" />
            <div className="w-[4vw] self-center bg-black h-1" />
          </div>
        </div>
        {/* <div className="bg-black text-white w-max px-2 py-1 rounded-xl self-center text-xl">
          Why Us?
        </div> */}
        <div className="flex widescreen:flex-row mobile:flex-col items-center mobile:gap-y-8">
          {reasons.map((reason, i) => (
            <div className="mobile:w-[85%] flex flex-col items-center gap-y-6 mobile:gap-y-2">
              <img
                src={reason.link}
                alt="img"
                className="w-[12vw] aspect-auto rounded-xl mobile:w-[60vw]"
              />
              <div
                key={i}
                className={twMerge(
                  "mobile:hidden text-center tracking-wider text-sm font-semibold px-6 relative flex-1 flex flex-col justify-center items-center",
                  i != reasons.length - 1 &&
                    "after:absolute after:w-[2px] after:h-2/3 after:right-0 after:top-1/2 after:-translate-y-1/2 after:bg-front"
                )}
              >
                {reason.description}
              </div>
              <div className="widescreen:hidden text-center py-4 border-b-2 border-front text-front font-semibold">
                {reason.description}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center">
        {/* <div className="flex flex-row justify-around widescreen:pt-20 mobile:pt-10 mobile:flex-wrap">
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
        </div> */}
      </div>
    </section>
  );
}
