import { Product } from "../../../interfaces/Data";
import useFetch from "../../../hooks/useFetch";

export default function Products() {
  const [products, productsLoading] = useFetch<Product[]>(
    "/data/products.json"
  );
  return (
    <section className="my-[10vh] flex flex-col gap-y-12 items-center">
      {productsLoading ? (
        <div>Loading...</div>
      ) : (
        products.map((product, id) => (
          <div className="flex flex-row bg-background bg-opacity-[70%] backdrop-blur-sm px-16 py-10 w-[80%] rounded-xl">
            <div className="basis-1/2 flex flex-col items-center">
              <img src={product.imgUrl} />
              <div className="text-4xl font-bold text-primary">
                {product.name}
              </div>
            </div>
            <div className="basis-1/2 flex flex-col gap-y-4">
              <div className="text-medium font-semibold">
                {product.description}
              </div>
              <div>
                <div className="text-primary font-bold text-2xl">Features</div>
                {/* {product.features.map((feature, i) => { */}
                {/* <div></div>; */}
                {/* })} */}
                <button className="px-4 py-2 text-back rounded-xl bg-gradient-to-r from-primary bg-primary bg-opacity-25 hover:cursor-pointer hover:-translate-y-1 duration-300">
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
