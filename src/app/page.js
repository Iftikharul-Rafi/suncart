import Hero from "@/app/components/hero";
// page.js ফাইলে
import PopularProducts from "@/app/components/PopularProducts";
import SummerTips from "@/app/components/summerTips";
import TopBrands from "@/app/components/topBrands";

export default function Home() {
  return (
    
    <>
      <Hero />
      <PopularProducts />
      <SummerTips />
      <TopBrands />
    </>
  );
}