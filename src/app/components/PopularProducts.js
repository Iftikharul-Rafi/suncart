import { getPopularProducts } from "../../../lib/products";
import ProductCard from "./ProductCard";

export default function PopularProducts() {
  const products = getPopularProducts();

  if (!products || products.length === 0) {
    return <p className="text-center py-10 text-gray-500">No products found</p>;
  }

  return (
    <section className="my-16 max-w-7xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">
          POPULAR <span className="text-[#6D94C5]">PRODUCT</span>
        </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}.