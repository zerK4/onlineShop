import { Link } from "react-router-dom";
export default function SmallCart({
  cartItems,
  addToCart,
  removeFromCart,
  currency,
  showCartHandler,
}) {
  return (
    <div className="absolute h-auto w-96 -right-9 md:right-0 lg:right-0 p-5 z-10 bg-gray-50 shadow-lg max-h-96 overflow-auto">
      {cartItems?.map((items) => (
        <div className="mb-5 shadow-md p-2 flex justify-between" key={items.id}>
          <div className="flex flex-col justify-between">
            <p className="">{items.title}</p>
            <div className="buttons flex justify-between w-48 items-center px-5 mt-5">
              <button
                onClick={(e) => {
                  removeFromCart(items);
                }}
                className="h-10 w-12 bg-lime-400 rounded-lg"
              >
                -
              </button>
              <p className="">{items.qty}</p>
              <button
                onClick={(e) => {
                  addToCart(items);
                }}
                className="h-10 w-12 bg-lime-400 rounded-lg"
              >
                +
              </button>
            </div>
            <div className="mt-2">
              {currency === "EUR"
                ? parseInt(items.price * 0.94) * items.qty
                : currency === "RON"
                ? parseInt(items.price * 5) * items.qty
                : items.price * items.qty}{" "}
              {currency}
            </div>
          </div>
          <img
            src={items.image}
            className="h-36 w-36 object-contain"
            alt={items.title}
          />
        </div>
      ))}
      <Link to="/cart">
        <button onClick={showCartHandler} className="h-10 w-full bg-lime-400">
          See cart
        </button>
      </Link>
    </div>
  );
}
