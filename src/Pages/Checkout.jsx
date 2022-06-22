import { Link } from "react-router-dom";

export default function Checkout({
  addToCart,
  removeFromCart,
  cartItems,
  currency,
}) {
  return (
    <div className="mt-20 md:overflow-auto lg:overflow-auto w-screen min-h-full flex gap-2 flex-wrap justify-center items-center">
      <div className="shadow-2xl p-10 leftItems max-h-[50rem] overflow-auto">
        {cartItems.map((items) => (
          <div
            className="item flex shadow-xl mb-10 p-4 flex-wrap justify-center gap-5"
            key={items.id}
          >
            <div className="itemLeft w-[15rem] flex flex-col items-center">
              <img
                src={items.image}
                alt={items.title}
                className="h-40 w-40 object-contain"
              />
              <div className="flex justify-between items-center mt-4 w-full">
                <button
                  onClick={(e) => {
                    removeFromCart(items);
                  }}
                  className="h-10 w-10 bg-lime-400 rounded-sm shadow-lg"
                >
                  {" "}
                  -{" "}
                </button>
                {items.qty}
                <button
                  onClick={(e) => {
                    addToCart(items);
                  }}
                  className="h-10 w-10 bg-lime-400 rounded-sm shadow-lg"
                >
                  {" "}
                  +{" "}
                </button>
              </div>
            </div>
            <div className="itemRight flex flex-col justify-between w-2/3 sm:w-1/2">
              <p>{items.title}</p>
              {items.category === "tech" ? null : items.category ===
                "jewelery" ? null : (
                <button className="p-2 w-20 bg-lime-400 mb-3">
                  {items.size === "" ? "Add a size" : items.size}
                </button>
              )}
              <div className="bg-lime-400 p-2 rounded-sm">
                {currency === "EUR"
                  ? parseInt(items.price * 0.94 * items.qty)
                  : currency === "RON"
                  ? parseInt(items.price * 5 * items.qty)
                  : items.price * items.qty}{" "}
                {currency} {"Pieces "}
                {items.qty}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="rightItems sm:w-5/6 w-screen lg:w-1/3 shadow-xl p-10 h-auto">
        <div className="title w-full text-center text-2xl font-semibold">
          Complete your data
        </div>
        <div className="inputs mt-5 flex flex-col gap-5">
          <input
            type="text"
            className="h-14 bg-gray-200 p-2 rounded-sm w-full placeholder-black outline-none"
            placeholder="Enter your name..."
          />
          <input
            type="text"
            className="h-14 bg-gray-200 p-2 rounded-sm w-full placeholder-black outline-none"
            placeholder="Enter your card number..."
          />
          <div className="dates flex gap-5">
            <input
              type="text"
              placeholder="MM"
              className="h-14 bg-gray-200 p-2 rounded-sm w-20 placeholder-black outline-none"
            />
            <input
              type="text"
              placeholder="YY"
              className="h-14 bg-gray-200 p-2 rounded-sm w-20 placeholder-black outline-none"
            />
            <input
              type="text"
              placeholder="CCV"
              className="h-14 bg-gray-200 p-2 rounded-sm w-20 placeholder-black outline-none"
            />
          </div>
          <input
            type="text"
            className="h-14 bg-gray-200 p-2 rounded-sm w-full placeholder-black outline-none"
            placeholder="Enter your country..."
          />
          <input
            type="text"
            className="h-14 bg-gray-200 p-2 rounded-sm w-full placeholder-black outline-none"
            placeholder="Enter your city..."
          />
          <input
            type="text"
            className="h-14 bg-gray-200 p-2 rounded-sm w-full placeholder-black outline-none"
            placeholder="Enter your street..."
          />
          <div className="dates flex gap-5">
            <input
              type="text"
              placeholder="Str. Nr."
              className="h-14 bg-gray-200 p-2 rounded-sm w-20 placeholder-black outline-none"
            />
            <input
              type="text"
              placeholder="Building"
              className="h-14 bg-gray-200 p-2 rounded-sm w-20 placeholder-black outline-none"
            />
            <input
              type="text"
              placeholder="Ap."
              className="h-14 bg-gray-200 p-2 rounded-sm w-20 placeholder-black outline-none"
            />
          </div>
          <input
            type="text"
            className="h-14 bg-gray-200 p-2 rounded-sm w-full placeholder-black outline-none"
            placeholder="Enter your phone..."
          />
          <input
            type="text"
            className="h-14 bg-gray-200 p-2 rounded-sm w-full placeholder-black outline-none"
            placeholder="Enter your email..."
          />
          <button className="bg-lime-400 h-14 w-full shadow-lg hover:shadow-lime-400">
            Checkout!
          </button>
        </div>
      </div>
    </div>
  );
}
