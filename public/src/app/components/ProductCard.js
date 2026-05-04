"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ProductCard({ product }) {
  const [imgSrc, setImgSrc] = useState(product?.image);

  if (!product) return null;

  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 overflow-hidden">
      
     
      <div className="relative w-full h-56 bg-gray-50">
        <Image
          src={imgSrc || "/image/fallback.jpg"}
          alt={product.name}
          fill
          className="object-contain p-3"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onError={() => setImgSrc("/image/fallback.jpg")}
        />
      </div>

      
      <div className="p-5">
        
        <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
        
        
        <p className="text-sm text-gray-500 mt-1">
          {product.brand} · Stock: {product.stock}
        </p>

        
        <p className="text-gray-600 text-sm mt-3 line-clamp-2">
          {product.description}
        </p>

        
        <div className="mt-5 flex items-center justify-between">
          <span className="text-2xl font-extrabold text-[#6D94C5]">
            ${product.price}
          </span>
          <Link href={`/products/${product.id}`}>
            <button className="px-5 py-2 bg-[#6D94C5] text-white text-sm font-semibold rounded-full hover:bg-[#5a7fb0] transition shadow-sm">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}