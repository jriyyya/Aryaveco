import { twMerge } from "tailwind-merge";
import MaterialIcon from "../../../common/MaterialIcon";
import useFetch from "../../../hooks/useFetch";
import { Product } from "../../../interfaces/Data";
import { useEffect, useRef } from "react";

export default function OurProducts() {
  const [products, productsLoading] = useFetch<Product[]>(
    "/data/products.json"
  );

  const carouselRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    carouselRef.current.scrollTo({ left: 150 });
  });

  return (
    <section className="bg-primary w-full px-24 py-16 mt-[10vh] border-primary border rounded-3xl flex flex-col justify-center gap-y-8 bg-opacity-[10%] backdrop-blur-md">
      <div className="bg-black text-white w-max px-2 py-1 rounded-xl self-center text-xl">
        Want to buy?
      </div>
      <div className="flex flex-col justify-center">
        <div className="text-3xl font-semibold text-front self-center">
          Browse our products
        </div>
        <div className="flex flex-row self-center gap-x-4 pt-4">
          <div className="w-[4vw] self-center bg-black h-1" />
          <div className="w-[4vw] self-center bg-black h-1" />
        </div>
      </div>
      <div
        className="w-[100%] overflow-x-scroll scroll-smooth scrollbar-hidden"
        ref={carouselRef}
      >
        <button
          onClick={() =>
            carouselRef.current.scrollBy({ left: -window.innerWidth / 3 })
          }
        >
          <MaterialIcon
            codepoint="eaaa"
            className="absolute left-10 top-96 rotate-180 text-5xl hover:cursor-pointer hover:scale-110 duration-300"
          />
        </button>
        <button
          onClick={() =>
            carouselRef.current.scrollBy({ left: window.innerWidth / 3 })
          }
        >
          <MaterialIcon
            codepoint="eaaa"
            className="absolute right-10 text-5xl top-96 hover:cursor-pointer hover:scale-110 duration-300"
          />
        </button>
        {productsLoading ? (
          <p>Loading...</p>
        ) : (
          <div
            className="flex flex-row gap-x-16 px-8"
            style={{ width: `${(products.length * 100) / 3}%` }}
          >
            {products.map((product, i) => (
              <div
                key={i}
                className="bg-background  border-primary border rounded-3xl p-8 flex flex-col gap-y-4"
              >
                <img src={product.imgUrl} alt="water-cooler" className="" />
                <div className="flex flex-col">
                  <div className="text-xl font-semibold text-primary">
                    {product.name}
                  </div>
                  <div className="w-full h-[1px] bg-primary" />
                </div>
                <div>
                  <div>
                    Capacity:{" "}
                    <span className="font-semibold">
                      {product.features.capacity} ltrs/day
                    </span>
                  </div>
                  <div>
                    Power:{" "}
                    <span className="font-semibold">
                      {product.features.power} 6kW
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
