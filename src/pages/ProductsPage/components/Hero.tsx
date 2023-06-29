export default function Hero() {
  return (
    <section className="flex flex-col justify-center gap-y-8 widescreen:mt-[10vh] w-[60%] mobile:w-[100%] text-center items-center">
      <div className="bg-black text-white w-max px-2 py-1 rounded-xl self-center text-xl">
        Want to buy?
      </div>
      <div className="flex flex-col justify-center gap-y-8">
        <div className="flex flex-col gap-y-4 mobile:gap-y-2">
          <div className="text-5xl font-semibold text-primary self-center mobile:text-3xl">
            Browse through our products
          </div>
          <div className="flex flex-row self-center gap-x-4">
            <div className="w-[4vw] self-center bg-black h-1" />
            <div className="w-[4vw] self-center bg-black h-1" />
          </div>
        </div>
        <div className="mobile:backdrop-blur-lg mobile:px-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
          animi laborum maxime sed nulla in facilis quia perferendis neque
          possimus doloribus doloremque, cum, soluta quis dolore quidem.
          Consequuntur iure numquam accusamus excepturi officiis deleniti! Ipsa
          molestias blanditiis exercitationem autem laboriosam.
        </div>
      </div>
    </section>
  );
}
