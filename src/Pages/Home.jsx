import ProductWIdget from "../Components/ProductWIdget";
import { Link } from "react-router-dom";

export default function Home({
  products,
  category,
  setId,
  currency,
  setCurrencyActive,
  setShowCart,
}) {
  return (
    <div className="mt-20 px-10">
      <div className="text-3xl font-bold">{category}</div>
      <main className="mt-20 w-full shadow-xl min-h-screen p-10 mb-10 flex flex-wrap gap-10 justify-center">
        {products.length === 0 ? (
          <div className="">Loading...</div>
        ) : (
          products?.map((product) => (
            <Link key={product.id} to={"/product/" + product.id}>
              <ProductWIdget
                name={product.title}
                image={product.image}
                price={product.price}
                description={product.description}
                rating={product.rating}
                stock={product.stock}
                id={product.id}
                setId={setId}
                currency={currency}
              />
            </Link>
          ))
        )}
      </main>
    </div>
  );
}
