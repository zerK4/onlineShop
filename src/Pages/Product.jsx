import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Product({
  currency,
  addToCart,
  size,
  setSize,
  sizeHandler,
}) {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const getOne = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`,
        {
          headers: { "Access-Control-Allow-Origin": "*" },
        }
      );
      setProduct(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getOne();
  }, [id]);
  if (product.length === 0) {
    return (
      <div className="w-full mt-40 text-4xl flex items-center justify-center">
        <div className="w-2/3 text-center">Loading...</div>
      </div>
    );
  } else {
    return (
      <div className="p-10 mt-40 w-screen flex items-center justify-center">
        <div className="relative flex flex-wrap items-center w-full shadow-xl flex-col lg:w-5/6 p-10 lg:justify-between lg:flex-row">
          <div
            className={
              product.rating.rate < 2.5
                ? "absolute top-0 right-0 rounded-lg flex shadow-2xl text-gray-50 font-bold shadow-red-500 justify-center items-center text-xl w-full h-10 bg-red-600"
                : product.stock < 10
                ? "absolute top-0 right-0 rounded-lg flex shadow-2xl text-gray-50 font-bold shadow-yellow-300 justify-center items-center text-xl w-full h-10 bg-yellow-300"
                : null
            }
          >
            {product.rating.rate < 2.5 ? (
              "Out of Stock"
            ) : product.stock < 10 ? (
              <p>Hurry up, only {product.stock} available now!</p>
            ) : null}
          </div>
          <div className="right">
            <img
              src={product.image}
              className="w-80 h-80 object-contain shadow-xl p-5 rounded-lg"
              alt={product.title}
            />
          </div>
          <div className="left w-full lg:w-3/6">
            <p className="w-full text-xl font-semibold mt-10 lg:mt-0">
              {product.title}
            </p>
            <p className=" mt-10 lg:mt-0">{product.description}</p>
            {product.category === "electronics" ? (
              <div className="sizes mt-4 flex gap-1 bg-black p-2 text-gray-50">
                Size is already selected with the item!
              </div>
            ) : product.category === "jewelery" ? (
              <div className="bg-black text-gray-50 p-2 mt-2">
                You will be called by a colleague to configure a size!
              </div>
            ) : (
              <div className="sizes mt-4 flex gap-1">
                <button
                  onClick={(e) => {
                    sizeHandler(e);
                  }}
                  value="S"
                  className={
                    size === "S"
                      ? "h-10 w-16 text-gray-50 bg-black"
                      : "h-10 w-16 border-2 border-black"
                  }
                >
                  S
                </button>
                <button
                  onClick={(e) => {
                    sizeHandler(e);
                  }}
                  value="M"
                  className={
                    size === "M"
                      ? "h-10 w-16 text-gray-50 bg-black"
                      : "h-10 w-16 border-2 border-black"
                  }
                >
                  M
                </button>
                <button
                  onClick={(e) => {
                    sizeHandler(e);
                  }}
                  value="L"
                  className={
                    size === "L"
                      ? "h-10 w-16 text-gray-50 bg-black"
                      : "h-10 w-16 border-2 border-black"
                  }
                >
                  L
                </button>
                <button
                  onClick={(e) => {
                    sizeHandler(e);
                  }}
                  value="XL"
                  className={
                    size === "XL"
                      ? "h-10 w-16 text-gray-50 bg-black"
                      : "h-10 w-16 border-2 border-black"
                  }
                >
                  XL
                </button>
                <button
                  onClick={(e) => {
                    sizeHandler(e);
                  }}
                  value="XXL"
                  className={
                    size === "XXL"
                      ? "h-10 w-16 text-gray-50 bg-black"
                      : "h-10 w-16 border-2 border-black"
                  }
                >
                  XXL
                </button>
              </div>
            )}
            <div className="mt-10 flex justify-between">
              <div className="bg-slate-200 p-2 rounded-md">
                Reviews: {product.rating?.count}{" "}
              </div>
              <div className="bg-slate-200 p-2 rounded-md">
                Stars: {product.rating?.rate}
              </div>
            </div>
            <div className="flex justify-between text-xl mt-10">
              <p className="flex items-center">
                <span className="text-xl font-semibold mr-2">{currency}</span>
                {currency === "USD"
                  ? product.price
                  : currency === "EUR"
                  ? parseInt(product.price * 0.94)
                  : parseInt(product.price * 5)}
              </p>
              <button
                onClick={(e) => {
                  product.rating.rate > 2.5 ? addToCart(product) : null;
                }}
                className={
                  product.rating.rate > 2.5
                    ? "bg-lime-400 p-3 rounded-md shadow-xl text-gray-50 font-bold hover:shadow-lime-400 ease-in-out duration-200"
                    : "bg-red-500 p-3 rounded-md shadow-xl text-gray-50 font-bold hover:shadow-red-400 ease-in-out duration-200 cursor-not-allowed"
                }
              >
                Add to cart!
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
{
  /* */
}
