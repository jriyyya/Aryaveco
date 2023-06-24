import MaterialIcon from "../../../common/MaterialIcon";

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

export default function Testimonials() {
  return (
    <section className="bg-background w-full px-24 py-16 mt-[20vh] border-primary border rounded-3xl flex flex-col justify-center gap-y-4 bg-opacity-60 backdrop-blur-md">
      <div className="bg-black text-white w-max px-2 py-1 rounded-xl self-center text-xl">
        Want to see Reviews?
      </div>
      <div className="flex flex-row items-stretch"></div>
      <div className="flex flex-col justify-center">
        <div className="text-3xl font-semibold text-front self-center">
          Testimonials of our customers
        </div>
        <div className="flex flex-row self-center gap-x-4 pt-4">
          <div className="w-[4vw] self-center bg-black h-1" />
          <div className="w-[4vw] self-center bg-black h-1" />
        </div>
        <div className="flex flex-wrap justify-around pt-20">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className={` ${
                i % 2 == 0 ? "mt-24" : ""
              }  w-[23%] px-8 py-4 rounded-xl flex flex-col gap-y-2 bg-gradient-to-b from-background to-transparent before:absolute before:top-0 before:left-0 before:w-full
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
                {testimonial.name}{" "}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
