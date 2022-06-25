import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import axios from "axios";

function App() {
  const [products, setProducts] = useState("");
  const [id, setId] = useState();
  const [category, setCategory] = useState("All");
  const [filtered, setFiltered] = useState([]);
  const [currency, setCurrency] = useState("USD");
  const [currencyActive, setCurrencyActive] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [size, setSize] = useState("");
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(!showCart);
  };

  const currencyHandler = () => {
    setCurrencyActive(!currencyActive);
  };

  useEffect(() => {
    filterCategoryHandler();
  }, [products]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get("http://fakestoreapi.com/products", {
          headers: { "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json",
                   },
        });
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getProducts();
  }, [category, id]);
  const categoryHandler = (e) => {
    setCategory(e.target.value);
  };
  const currencyType = (e) => {
    setCurrency(e.target.value);
  };

  const filterCategoryHandler = (e) => {
    switch (category) {
      case "All":
        setFiltered(products);
        break;
      case "Women":
        setFiltered(
          products.filter(
            (products) => products.category === "women's clothing"
          )
        );
        break;
      case "Men":
        setFiltered(
          products.filter((products) => products.category === "men's clothing")
        );
        break;
      case "Tech":
        setFiltered(
          products.filter((products) => products.category === "electronics")
        );
        break;
      case "Jewelry":
        setFiltered(
          products.filter((products) => products.category === "jewelery")
        );
        break;
    }
  };
  // add to cart
  const addToCart = (item) => {
    const exists = cartItems.find((x) => x.id === item.id);
    if (exists) {
      setCartItems(
        cartItems.map((x) =>
          x.id === item.id ? { ...exists, qty: exists.qty + 1 } : x
        )
      );
    } else {
      setCartItems([
        ...cartItems,
        {
          ...item,
          qty: 1,
          size: size,
        },
      ]);
    }
  };
  const sizeHandler = (e) => {
    setSize(e.target.value);
    const exists = cartItems.find((x) => x.id === e.id);
    if (exists) {
      setCartItems(
        cartItems.map((x) => (x.id === e.id ? { ...exists, size: size } : x))
      );
    }
  };
  const removeFromCart = (item) => {
    const exists = cartItems.find((x) => x.id === item.id);
    if (exists.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== item.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === item.id ? { ...exists, qty: exists.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div className="App overflow-x-hidden overflow-x-hdden md:overflow-auto lg:overflow-auto">
      <Header
        categoryHandler={categoryHandler}
        category={category}
        currencyType={currencyType}
        currencyActive={currencyActive}
        currencyHandler={currencyHandler}
        setCurrencyActive={setCurrencyActive}
        cartItems={cartItems}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        currency={currency}
        showCartHandler={showCartHandler}
        showCart={showCart}
        setShowCart={setShowCart}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              products={filtered}
              category={category}
              setId={setId}
              setCurrencyActive={setCurrencyActive}
              currency={currency}
              setShowCart={setShowCart}
            />
          }
        />
        <Route
          path="/product/:id"
          element={
            <Product
              currency={currency}
              setCurrencyActive={setCurrencyActive}
              addToCart={addToCart}
              size={size}
              sizeHandler={sizeHandler}
              setShowCart={setShowCart}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              currency={currency}
              setShowCart={setShowCart}
            />
          }
        />
        <Route
          path="/checkout"
          element={
            <Checkout
              cartItems={cartItems}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              currency={currency}
              setShowCart={setShowCart}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
