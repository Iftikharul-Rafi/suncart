"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  "/image/banner1.jpg",
  "/image/banner2.jpg",
  "/image/banner3.jpg",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full relative overflow-hidden">
      
      {/* ❗ height responsive */}
      <div className="w-full h-[70vh] md:h-[85vh] relative">
        
        {/* Images */}
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={img}
              alt="banner"
              fill
              priority
              className="object-cover"
            />
          </div>
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            {/* Animate.css ক্লাস এখানে যোগ করা হলো */}
            <h1 className="animate__animated animate__bounceIn text-3xl md:text-5xl font-bold mb-4">
              Summer Collection 2026
            </h1>
            <p className="mb-4 text-sm md:text-lg">
              Discover trendy outfits, sunglasses & more
            </p>
            <button className="px-6 py-2 bg-[#6D94C5] rounded-md hover:opacity-90 transition">
              Shop Now
            </button>
          </div>
        </div>

        {/* Dots */}
        <div className="absolute bottom-6 w-full flex justify-center gap-3">
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full cursor-pointer transition ${
                current === index ? "bg-[#6D94C5]" : "bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}.