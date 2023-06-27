import MaterialIcon from "../../../common/MaterialIcon";
import useModal from "../../../hooks/useModal";
import { Product } from "../../../interfaces/Data";

interface ProductModalProps {
  product: Product;
}

export default function ProductModal(props: ProductModalProps) {
  const modal = useModal();
  return (
    <div className="bg-background text-black z-10 relative w-[60vw] max-h-[90vh] px-16 py-12 rounded-3xl overflow-y-scroll overflow-x-hidden">
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

      <div className="flex flex-col items-center gap-x-4">
        <div className="flex">
          <img
            src={props.product.imgUrl}
            alt="water-cooler"
            className="w-[20vw]"
          />
          <div className="flex flex-col gap-y-4">
            <div className="text-primary font-semibold text-5xl">
              {props.product.name}
            </div>
            <div className="font-medium">{props.product.description}</div>
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
        <div>
          <div className="flex flex-col gap-y-8 mt-24">
            <div className="flex flex-col gap-y-4 border-2 border-primary justify-center py-6 px-24 rounded-3xl">
              <div className="text-primary font-bold text-2xl self-center">
                Features
              </div>
              <div className="flex flex-col gap-y-2">
                <div className="flex items-center gap-x-2">
                  <div className="h-[12px] w-[3px] bg-primary" />
                  <div>Capacity : </div>
                  <div className="font-semibold">
                    {props.product.features.capacity} ltrs/day
                  </div>
                </div>
                <div className="flex items-center gap-x-2">
                  <div className="h-[12px] w-[3px] bg-primary" />
                  <div>Storage : </div>
                  <div className="font-semibold">
                    {props.product.features.storage} ltrs
                  </div>
                </div>
                <div className="flex items-center gap-x-2">
                  <div className="h-[12px] w-[3px] bg-primary" />
                  <div>Power : </div>
                  <div className="font-semibold">
                    {props.product.features.power} kW
                  </div>
                </div>
                <div className="flex items-center gap-x-2">
                  <div className="h-[12px] w-[3px] bg-primary" />
                  <div>Noise Level : </div>
                  <div className="font-semibold">
                    &#60;{props.product.features.noise} dB
                  </div>
                </div>
                {props.product.features.extras.map((extra, i) => (
                  <div className="flex items-center gap-x-2" key={i}>
                    <div className="h-[12px] w-[3px] bg-primary" />
                    <div>{extra}</div>
                  </div>
                ))}
              </div>
            </div>
            {props.product.highlights.map((highlight, i) => (
              <div
                className="flex flex-col gap-y-4 border-2 border-primary justify-center py-6 px-24 rounded-3xl"
                key={i}
              >
                <div className="text-primary font-bold text-2xl self-center">
                  {" "}
                  {highlight.title}
                </div>
                {highlight.items.map((item, i) => (
                  <div key={i}>
                    <div className="flex items-center gap-x-2">
                      <div className="h-[12px] w-[3px] bg-primary" />
                      <div>{item.key} </div>
                      <div className="font-semibold">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
