import { Link } from "react-router-dom";

export default function Cart({
  cartItems,
  addToCart,
  removeFromCart,
  currency,
}) {
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const taxPrice = itemsPrice * 0.21;
  const totalPrice = itemsPrice + taxPrice;
  return (
    <div className="mt-40 md:p-10 lg:p-10 flex flex-wrap">
      {cartItems.length === 0 ? (
        <div className="text-4xl font-bold w-screen flex justify-center">
          The cart is empty
        </div>
      ) : (
        <div className="flex gap-10 flex-wrap justify-center items-center w-screen">
          <div className="absolute bg-lime-400 top-20 right-10 shadow-lg px-10 py-3">
            <div className="">Items Price: {parseInt(itemsPrice)}</div>
            <div className="">Tax Price: {parseInt(taxPrice)}</div>
            <div className="">Total: {parseInt(totalPrice)}</div>
            <Link to="/checkout">
              <button className="mt-5 bg-gray-100 h-10 w-full hover:bg-gray-200 ease-in-out duration-200">
                Checkout
              </button>
            </Link>
          </div>
          {cartItems.map((items) => (
            <div
              key={items.id}
              className="shadow-lg p-10 flex flex-col justify-center h-auto w-[25rem] md:w-[62rem] md:gap-5 md:justify-center md:max-w-[54rem]"
            >
              <div className="flex flex-wrap justify-center md:justify-between lg:justify-between">
                <div className="left flex flex-col gap-5">
                  <img
                    src={items.image}
                    alt={items.title}
                    className="h-80 w-80 object-contain shadow-lg p-2"
                  />
                  <div className="flex justify-center items-center gap-10">
                    <button
                      className="h-10 w-10 bg-lime-400 rounded-sm shadow-lg"
                      onClick={(e) => {
                        removeFromCart(items);
                      }}
                    >
                      -
                    </button>
                    {items.qty}
                    <button
                      className="h-10 w-10 bg-lime-400 rounded-sm shadow-lg"
                      onClick={(e) => addToCart(items)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="right">
                  <div className="w-96 h-[8rem]">{items.title}</div>
                  {items.category === "tech" ? null : items.category ===
                    "jewelery" ? null : (
                    <div className="h-10 w-20 bg-black text-gray-50 flex items-center justify-center mt-10">
                      {items.size}
                    </div>
                  )}
                  <div className="flex justify-between mt-5 items-center">
                    <div className="p-3 bg-gray-50 shadow-xl">
                      Rate: {items.rating.rate}
                    </div>
                    <div className="p-3 bg-gray-50 shadow-xl">
                      Ratings: {items.rating.count}
                    </div>
                  </div>
                  <p className="flex items-center mt-10">
                    <span className="text-xl font-semibold mr-2">
                      {currency}
                    </span>
                    {currency === "EUR"
                      ? parseInt(items.price * 0.94) * items.qty
                      : currency === "RON"
                      ? parseInt(items.price * 5) * items.qty
                      : items.price * items.qty}{" "}
                    {currency}
                  </p>
                </div>
              </div>
              <div className="w-1/1 mt-5">{items.description}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
