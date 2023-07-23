import MaterialIcon from "../../../common/MaterialIcon";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Anil J",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, debitis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, debitis.",
    imgUrl: "/images/profile.png",
  },
  {
    name: "Anil J",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, debitis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, debitis.",
    imgUrl: "/images/profile.png",
  },
  {
    name: "Anil J",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, debitis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, debitis.",
    imgUrl: "/images/profile.png",
  },
  {
    name: "Anil J",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, debitis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, debitis.",
    imgUrl: "/images/profile.png",
  },
];

const videoLink = ["/videos/1.mp4", "/videos/3.mp4", "/videos/4.mp4"];

export default function Testimonials() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.matchMedia("(max-width:600px)").matches);
  });

  return (
    <section className="bg-background w-full px-24 py-16 mobile:py-8 mobile:px-4 mt-[10vh] mb-[3vh] border-primary border rounded-3xl flex flex-col justify-center gap-y-8 bg-opacity-60 backdrop-blur-md">
      <div className="bg-black text-white w-max px-2 py-1 rounded-xl self-center text-xl">
        Want to see Reviews?
      </div>
      <div className="flex flex-col justify-center gap-y-4 mobile:gap-y-2">
        <div className="text-3xl font-semibold text-front self-center text-center">
          Testimonials of our customers
        </div>
        <div className="flex flex-row self-center gap-x-4">
          <div className="w-[4vw] self-center bg-black h-1" />
          <div className="w-[4vw] self-center bg-black h-1" />
        </div>
      </div>
      <div className="flex flex-wrap justify-around mobile:gap-y-8">
        {testimonials.map((testimonial, i) => (
          <div
            key={i}
            className={` ${
              i % 2 == 0 && !isMobile ? "mt-24" : ""
            }  w-[23%] mobile:w-[90%] px-8 py-4 mobile:px-4 rounded-xl flex flex-col gap-y-2 bg-gradient-to-b from-background to-transparent before:absolute before:top-0 before:left-0 before:w-full
              relative before:h-[80%] before:scale-[101%] before:bg-gradient-to-b before:from-primary before:to-transparent before:-z-1 before:rounded-inherit`}
          >
            <img
              src={testimonial.imgUrl}
              alt={testimonial.name}
              className="rounded-full w-[60%] self-center"
            />
            <MaterialIcon
              codepoint="e244"
              className="text-back bg-primary rounded-full text-4xl rotate-180 w-max"
            />
            <div className="font-medium text-sm">{testimonial.review}</div>
            <div className="font-semibold text-primary text-xl ">
              {testimonial.name}
            </div>
          </div>
        ))}
      </div>
      <div className="bg-black text-white w-max px-2 py-1 rounded-xl self-center text-xl mt-12">
        Want to see demo
      </div>
      <div className="flex flex-col justify-center gap-y-4 mobile:gap-y-2">
        <div className="text-3xl font-semibold text-front self-center text-center">
          Check out our demo
        </div>
        <div className="flex flex-row self-center gap-x-4">
          <div className="w-[4vw] self-center bg-black h-1" />
          <div className="w-[4vw] self-center bg-black h-1" />
        </div>
      </div>
      <div className="flex flex-wrap justify-around">
        {videoLink.map((link, i) => (
          <div className="w-[22%]">
            <video src={link} controls />
          </div>
        ))}
      </div>
    </section>
  );
}
