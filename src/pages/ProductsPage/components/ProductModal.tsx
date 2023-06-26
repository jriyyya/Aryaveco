import MaterialIcon from "../../../common/MaterialIcon";
import useModal from "../../../hooks/useModal";

export default function ProductModal() {
  const modal = useModal();
  return (
    <div className="bg-background text-black z-10 relative w-[60vw] px-16 py-12">
      <img
        src="/images/bg-modal.png"
        alt="bg-modal"
        className="absolute top-0 left-0 -z-1"
      />
      <button
        className="text-primary absolute top-5 right-5 hover:cursor-pointer duration-200 hover:scale-125"
        onClick={() => {
          modal.hide();
        }}
      >
        <MaterialIcon codepoint="e5cd" className="text-3xl" />
      </button>

      <div className="flex flex-row gap-x-4">
        <img
          src="/images/water-cooler.png"
          alt="water-cooler"
          className="w-[20vw]"
        />
        <div className="flex flex-col gap-y-4">
          <div className="text-primary font-semibold text-5xl">Model name</div>
          <div className="font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            impedit autem necessitatibus, eum quasi, consectetur veritatis
            reprehenderit ipsum architecto corrupti minus nam distinctio commodi
            asperiores consequuntur aliquid dolores! Facere, ipsam?
          </div>
          <div className="flex flex-row items-center gap-x-4">
            <button className="px-4 py-2 text-back rounded-xl bg-gradient-to-r from-primary bg-primary bg-opacity-25 hover:cursor-pointer hover:-translate-y-1 duration-300">
              Contact Us for Sales
            </button>
            <button className="flex flex-row items-center gap-x-2">
              <MaterialIcon codepoint="e80d" className="text-primary" />
              <span>Share this product</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
