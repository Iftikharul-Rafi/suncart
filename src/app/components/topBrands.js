"use client";

import Image from "next/image";

const brands = [
  {
    name: "SunShade",
    tagline: "Premium Sunglasses",
    image: "/image/Sunglasses.jpg",
    alt: "SunShade sunglasses",
    color: "from-amber-400 to-orange-500",
  },
  {
    name: "SummerVibe",
    tagline: "Beach & Outfits",
    image: "/image/Dress.jpg",
    alt: "SummerVibe dress",
    color: "from-sky-400 to-blue-500",
  },
  {
    name: "SkinCarePro",
    tagline: "Natural Skincare",
    image: "/image/Gel.jpg",
    alt: "SkinCarePro aloe gel",
    color: "from-green-400 to-emerald-500",
  },
  {
    name: "BeachBum",
    tagline: "Beach Accessories",
    image: "/image/Towel.jpg",
    alt: "BeachBum towel",
    color: "from-orange-400 to-red-500",
  },
];

export default function TopBrands() {
  return (
    <section className="my-20 max-w-7xl mx-auto px-4">
      
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          TOP <span className="text-[#6D94C5]">BRANDS</span>
        </h2>
        <div className="w-24 h-1 bg-[#6D94C5] mx-auto mt-3 rounded-full"></div>
        <p className="text-gray-500 mt-3 text-sm">Trusted by thousands</p>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {brands.map((brand, idx) => (
          <div
            key={idx}
            className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
          >
            
            <div className={`h-2 bg-gradient-to-r ${brand.color} w-full`}></div>

            
            <div className="p-6 text-center">
              
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-50 p-2 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <Image
                  src={brand.image}
                  alt={brand.alt}
                  width={80}
                  height={80}
                  className="object-contain w-full h-full"
                />
              </div>

              
              <h3 className="text-xl font-extrabold text-gray-800 tracking-wide">
                {brand.name}
              </h3>

              
              <p className="text-sm text-gray-500 mt-1">{brand.tagline}</p>

              
              <button className="mt-4 text-xs font-semibold text-[#6D94C5] hover:text-[#5a7fb0] transition flex items-center justify-center gap-1 group-hover:gap-2">
                Shop Collection <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      
      <div className="mt-12 text-center text-xs text-gray-400">
        + many more premium brands
      </div>
    </section>
  );
}