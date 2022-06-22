import { MdOutlineShoppingCart } from "react-icons/md";

export default function ProductWIdget({
  name,
  image,
  price,
  description,
  rating,
  stock,
  setId,
  id,
  currency,
}) {
  return (
    <div
      onClick={() => {
        setId(id);
      }}
      className="shadow-md p-10 relative h-fit hover:shadow-2xl ease-in-out duration-200 cursor-pointer"
    >
      <div
        className={
          stock === 0
            ? "absolute w-full h-full bg-gray-300 bg-opacity-30 left-0 top-0 flex items-center justify-center text-4xl"
            : null
        }
      >
        {stock === 0 ? "Out Of Stock" : ""}
      </div>
      <img src={image} className="h-60 w-60 object-contain" alt={name} />
      <div className="h-28">
        <p className="w-64 mt-8 text-gray-400">{name}</p>
        <p className="flex items-center">
          <span className="text-xl font-semibold mr-2">{currency}</span>
          {currency === "USD"
            ? price
            : currency === "EUR"
            ? parseInt(price * 0.94)
            : parseInt(price * 5)}
        </p>
      </div>
      <div className="">
        <MdOutlineShoppingCart
          className={
            stock === 0
              ? "absolute right-2 bottom-2 text-2xl h-12 w-12 bg-red-400 text-gray-100 shadow-xl rounded-full p-2 cursor-not-allowed"
              : "absolute right-2 bottom-2 text-2xl h-12 w-12 bg-lime-400 text-gray-100 shadow-xl rounded-full p-2 cursor-pointer"
          }
        />
      </div>
    </div>
  );
}
