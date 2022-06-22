import { Link } from "react-router-dom";
import { FcCurrencyExchange } from "react-icons/fc";
import { BsCart2 } from "react-icons/bs";
import { AiOutlineCaretDown, AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import SmallCart from "./SmallCart";

export default function Header({
  categoryHandler,
  category,
  currencyActive,
  currencyHandler,
  currencyType,
  setCurrencyActive,
  cartItems,
  addToCart,
  removeFromCart,
  currency,
  showCartHandler,
  showCart,
  setShowCart,
}) {
  const [navToggle, setNavToggle] = useState(false);

  const navToggler = () => {
    setNavToggle(!navToggle);
  };

  return (
    <div className="flex h-20 w-full justify-between items-center shadow-xl px-10">
      <GiHamburgerMenu onClick={navToggler} className="lg:hidden md:hidden" />
      <nav
        className={
          navToggle === true
            ? "md:flex lg:flex md:w-84 lg:w-84 md:justify-between lg:justify-between absolute h-screen bg-gray-50 z-10 top-0 left-0 flex flex-col w-screen items-center translate-y-0 ease-in-out duration-200 pt-20"
            : "md:flex lg:flex md:w-80 lg:w-80 md:justify-between lg:justify-between md:h-20 lg:h-20 md:relative lg:relative md:flex-row lg:flex-row md:translate-y-0 lg:translate-y-0 absolute h-screen bg-gray-50 z-10 top-0 left-0 flex flex-col w-screen items-center -translate-y-full ease-in-out duration-200"
        }
      >
        <AiOutlineClose
          onClick={navToggler}
          className="flex md:hidden lg:hidden absolute right-2 top-2 text-4xl bg-black text-gray-50 p-2 shadow-md"
        />
        <Link to="/">
          <button
            onClick={(e) => {
              categoryHandler(e), setCurrencyActive(false), setNavToggle(false);
            }}
            value="All"
            className={
              category === "All"
                ? "active w-32 h-20 ease-in duration-200"
                : "w-32 h-20 ease-in duration-200 hover:active"
            }
          >
            ALL
          </button>
        </Link>
        <Link to="/">
          <button
            onClick={(e) => {
              categoryHandler(e), setCurrencyActive(false), setNavToggle(false);
            }}
            value="Women"
            className={
              category === "Women"
                ? "active w-32 h-20 ease-in duration-200"
                : "w-32 h-20 ease-in duration-200 hover:active"
            }
          >
            WOMEN
          </button>
        </Link>
        <Link to="/">
          {" "}
          <button
            onClick={(e) => {
              categoryHandler(e), setCurrencyActive(false), setNavToggle(false);
            }}
            value="Men"
            className={
              category === "Men"
                ? "active w-32 h-20 ease-in duration-200"
                : "w-32 h-20 ease-in duration-200 hover:active"
            }
          >
            MEN
          </button>
        </Link>
        <Link to="/">
          <button
            onClick={(e) => {
              categoryHandler(e), setCurrencyActive(false), setNavToggle(false);
            }}
            value="Tech"
            className={
              category === "Tech"
                ? "active w-32 h-20 ease-in duration-200"
                : "w-32 h-20 ease-in duration-200 hover:active"
            }
          >
            TECH
          </button>
        </Link>
        <Link to="/">
          <button
            onClick={(e) => {
              categoryHandler(e), setCurrencyActive(false), setNavToggle(false);
            }}
            value="Jewelry"
            className={
              category === "Jewelry"
                ? "active w-32 h-20 ease-in duration-200"
                : "w-32 h-20 ease-in duration-200 hover:active"
            }
          >
            JEWELRY
          </button>
        </Link>
      </nav>
      <div className="flex">
        <div
          className="relative flex items-center mr-5 cursor-pointer z-20"
          onClick={currencyHandler}
        >
          <FcCurrencyExchange className="text-4xl" />
          <AiOutlineCaretDown className="text-xl" />
          <div
            className={
              currencyActive
                ? "absolute bg-white flex gap-1 shadow-lg p-2 ease-in-out duration-200 -translate-x-5 translate-y-10"
                : "absolute bg-white flex gap-1 shadow-lg p-2 ease-in-out duration-200 -translate-x-5 -translate-y-40"
            }
          >
            <button
              value="USD"
              onClick={(e) => {
                currencyType(e);
              }}
              className="border-b-2 hover:bg-gray-100 p-1 shadow-lg"
            >
              USD
            </button>
            <button
              value="EUR"
              onClick={(e) => {
                currencyType(e);
              }}
              className="border-b-2 hover:bg-gray-100 p-1 shadow-lg"
            >
              EUR
            </button>
            <button
              value="RON"
              onClick={(e) => {
                currencyType(e);
              }}
              className="border-b-2 hover:bg-gray-100 p-1 shadow-lgborder-black"
            >
              RON
            </button>
          </div>
        </div>
        <div className="relative">
          <div
            className={
              cartItems.length === 0
                ? "absolute -right-3 -top-2 h-5 w-5 text-gray-50 bg-red-600 flex items-center justify-center rounded-full -translate-y-20 ease-in-out duration-200"
                : "absolute -right-3 -top-2 h-5 w-5 text-gray-50 bg-red-600 flex items-center justify-center rounded-full translate-y-0 ease-in-out duration-200"
            }
          >
            {cartItems.length}
          </div>
          <BsCart2
            className="text-3xl cursor-pointer"
            onClick={showCartHandler}
          />
          {showCart === true || cartItems.length === 0 ? null : (
            <SmallCart
              cartItems={cartItems}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              showCart={showCart}
              currency={currency}
              showCartHandler={showCartHandler}
            />
          )}
        </div>
      </div>
    </div>
  );
}
