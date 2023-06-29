export default function ContactPage() {
  return (
    <div className="flex flex-col justify-center items-center my-24">
      <img src="/images/hero.png" className="absolute -z-10" />
      <form className="backdrop-blur-xl p-12 mobile:px-4 mobile:py-6 mobile:gap-y-6 bg-background w-[40vw] mobile:w-[90%] flex flex-col items-center rounded-2xl gap-y-12 bg-opacity-80 border-2 border-primary">
        <div className="text-4xl font-bold text-primary">Contact us</div>
        <div className="flex flex-col gap-y-8 w-full">
          <div className="flex flex-col">
            <div className="text-xl font-bold text-primary">Email</div>
            <input
              type="email"
              placeholder="Enter your Email here"
              className="w-full py-4 px-6 rounded-xl"
            />
          </div>
          <div className="flex flex-col">
            <div className="text-xl font-bold text-primary">
              Organization name
            </div>
            <input
              type="text"
              placeholder="Enter your organization name here"
              className="w-full py-4 px-6 rounded-xl"
            />
          </div>
          <div className="flex flex-col">
            <div className="text-xl font-bold text-primary">Message</div>
            <input
              type="text"
              placeholder="Enter your message here"
              className="w-full py-4 px-6 rounded-xl"
            />
          </div>
        </div>
        <button className="px-6 py-2 text-xl rounded-xl text-back bg-gradient-to-r from-primary to-transparent bg-primary bg-opacity-30 hover:-translate-y-1 duration-300">
          Send
        </button>
      </form>
    </div>
  );
}
