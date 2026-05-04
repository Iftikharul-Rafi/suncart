import { getProductById } from "../../../../lib/products"; // Path updated
import { getServerSession } from "next-auth";
import { authOptions } from "../../../../lib/auth"; // Path updated
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default async function ProductDetails({ params }) {
  // ✅ params handling (Next.js 15+ compatible)
  const { id: rawId } = await params; 
  const id = Number(rawId);

  if (!id) {
    return (
      <div className="text-center py-10 text-red-500">
        Invalid Product ID
      </div>
    );
  }

  // ✅ session check
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect(`/login?callbackUrl=/products/${id}`);
  }

  // ✅ product fetch
  const product = getProductById(id);

  if (!product) {
    return (
      <div className="text-center py-10 text-red-500">
        Product not found
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">

      {/* 🔙 Back Button */}
      <Link
        href="/products"
        className="inline-block mb-6 px-4 py-2 border rounded-md hover:bg-gray-100 transition"
      >
        ← Back to Products
      </Link>

      <div className="flex flex-col lg:flex-row gap-8 bg-white shadow-md rounded-xl p-6">

        {/* 🖼 Image Section */}
        <div className="lg:w-1/2 relative h-80 lg:h-96 bg-gray-100 rounded-lg overflow-hidden">
          <Image
            src={product.image || "/fallback.jpg"}
            alt={product.name || "Product Image"}
            fill
            className="object-contain p-4"
            // ✅ sizes optimization
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        {/* 📦 Content Section */}
        <div className="lg:w-1/2 flex flex-col justify-between">

          <div>
            <h2 className="text-3xl font-bold mb-2">
              {product.name}
            </h2>

            <p className="text-[#6D94C5] text-2xl font-semibold mb-2">
              ${product.price}
            </p>

            <p className="text-gray-500 mb-1">
              Brand: {product.brand}
            </p>

            <p className="text-yellow-500 mb-2">
              ★ {product.rating} / 5
            </p>

            <p className="mb-3 text-gray-700">
              {product.description}
            </p>

            <p className="text-green-600 font-medium">
              In Stock: {product.stock} units
            </p>
          </div>

          {/* 🛒 Button */}
          <button className="mt-6 w-full py-3 bg-[#6D94C5] text-white rounded-md hover:opacity-90 transition">
            Add to Cart (Demo)
          </button>

        </div>
      </div>
    </div>
  );
}