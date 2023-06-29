import { twMerge } from "tailwind-merge";

const teams = [
  {
    name: "Sanjay Kumar Garg",
    imgUrl: "/images/teams/Sanjay.png",
    position: "Director",
  },
  {
    name: "Bharat Bhushan Kapoor",
    imgUrl: "/images/teams/Bharat.png",
    position: "Cofounder",
  },
  {
    name: "Natwar Dhuwalia",
    imgUrl: "/images/teams/Natwar.png",
    position: "Cofounder",
  },
];

export default function Benefits() {
  return (
    <section className="bg-background w-full px-24 py-16 mt-[10vh] mb-[10vh] mobile:mt-[5vh] mobile:py-8 mobile:px-12 mobile:gap-y-2 border-primary border rounded-3xl flex flex-col justify-center gap-y-8 bg-opacity-60 backdrop-blur-md">
      <div className="bg-black text-white w-max px-2 py-1 rounded-xl self-center text-xl">
        What are the benefits
      </div>
      <div className="flex flex-col justify-center gap-y-16 mobile:gap-y-4">
        <div className="flex flex-col mobile:gap-y-2 gap-y-4">
          <div className="text-3xl font-semibold text-front self-center mobile:text-2xl">
            Our team
          </div>
          <div className="flex flex-row self-center gap-x-4">
            <div className="w-[4vw] self-center bg-black h-1" />
            <div className="w-[4vw] self-center bg-black h-1" />
          </div>
        </div>
        <div className="flex flex-row justify-around text-center mobile:flex-col mobile:gap-y-6">
          {teams.map((member, i) => (
            <div
              className="flex flex-col gap-y-2 justify-center items-center mobile:gap-y-1"
              key={i}
            >
              <img src={member.imgUrl} className="w-[10vw] mobile:w-[25vw]" />
              <div className="text-2xl font-semibold mobile:text-lg">
                {member.name}
              </div>
              <div className="text-xl font-semibold text-primary mobile:text-base">
                {member.position}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
