export default function Work() {
  return (
    <section className="bg-background w-full px-24 py-16 mt-[30vh] border-primary border rounded-3xl flex flex-col justify-center gap-y-8 bg-opacity-60 backdrop-blur-md mobile:px-6 mobile:gap-y-2 mobile:py-6">
      <div className="bg-black text-white w-max px-2 py-1 rounded-xl self-center text-xl">
        Why do we do this?
      </div>
      <div className="flex flex-col justify-center gap-y-16 items-center mobile:gap-y-6">
        <div className="flex flex-col mobile:gap-y-2 gap-y-4">
          <div className="text-3xl font-semibold text-front self-center mobile:text-2xl text-center">
            Problems we aim to solve
          </div>
          <div className="flex flex-row self-center gap-x-4">
            <div className="w-[4vw] self-center bg-black h-1" />
            <div className="w-[4vw] self-center bg-black h-1" />
          </div>
        </div>

        <img
          src="/images/steps.png"
          alt="steps"
          className="w-[80%] mobile:w-[100%]"
        />
      </div>
    </section>
  );
}
