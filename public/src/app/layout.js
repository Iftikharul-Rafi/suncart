import "./globals.css";
import "animate.css";
import Providers from "./providers";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

export const metadata = {
  title: "SunCart – Summer Essentials Store",
  description: "Shop the best summer products: sunglasses, outfits, skincare & more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="summer">
      <body className="flex flex-col min-h-screen">
        <Providers>
          <Navbar />

          
          <main className="flex-grow container mx-auto px-4 py-6 pt-20 md:pt-24">
            {children}
          </main>

          <Footer />
        </Providers>
      </body>
    </html>
  );
}