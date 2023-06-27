import { Product } from "../../../interfaces/Data";
import useFetch from "../../../hooks/useFetch";
import useModal from "../../../hooks/useModal";
import ProductModal from "./ProductModal";

export default function Products() {
  const [products, productsLoading] = useFetch<Product[]>(
    "/data/products.json"
  );
  const modal = useModal();
  return (
    <section className="my-[10vh] flex flex-col gap-y-12 items-center">
      {productsLoading ? (
        <div>Loading...</div>
      ) : (
        products.map((product, id) => (
          <div className="flex flex-row bg-background bg-opacity-[70%] backdrop-blur-sm px-16 py-24 w-[80%] rounded-xl">
            <div className="basis-1/2 flex flex-col items-center">
              <img src={product.imgUrl} />
              <div className="text-4xl font-bold text-primary">
                {product.name}
              </div>
            </div>
            <div className="basis-1/2 flex flex-col gap-y-4">
              <div className="text-lg font-medium">{product.description}</div>
              <div className="flex flex-col gap-y-4">
                <div className="text-primary font-bold text-2xl">Features</div>
                <div className="flex flex-col gap-y-2">
                  <div className="flex items-center gap-x-2">
                    <div className="h-[12px] w-[3px] bg-primary" />
                    <div>Capacity : </div>
                    <div className="font-semibold">
                      {product.features.capacity} ltrs/day
                    </div>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <div className="h-[12px] w-[3px] bg-primary" />
                    <div>Storage : </div>
                    <div className="font-semibold">
                      {product.features.storage} ltrs
                    </div>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <div className="h-[12px] w-[3px] bg-primary" />
                    <div>Power : </div>
                    <div className="font-semibold">
                      {product.features.power} kW
                    </div>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <div className="h-[12px] w-[3px] bg-primary" />
                    <div>Noise Level : </div>
                    <div className="font-semibold">
                      &#60;{product.features.noise} dB
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => {
                    modal.show(<ProductModal product={product} />);
                  }}
                  className="px-4 py-2 w-max text-back rounded-xl bg-gradient-to-r from-primary bg-primary bg-opacity-25 hover:cursor-pointer hover:-translate-y-1 duration-300"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </section>
  );
}
