"use client";

import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-6 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          
          
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-4xl">☀️</span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-gray-800 tracking-tight">
                Sun<span className="text-[#6D94C5]">Cart</span>
              </h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Summer Essentials Store – your one-stop shop for sunglasses, outfits, skincare & beach accessories.
            </p>
            
            <div className="text-sm text-gray-600 space-y-1">
              <p className="flex items-center gap-2">📍 Gulshan, Dhaka, Bangladesh</p>
              <p className="flex items-center gap-2">📞 09642 922 922</p>
              <p className="flex items-center gap-2">✉️ hello@suncart.com</p>
            </div>
          </div>

          
          <div>
            <h4 className="font-semibold text-gray-800 mb-3">Information</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/about" className="hover:text-[#6D94C5] transition">About us</Link></li>
              <li><Link href="/contact" className="hover:text-[#6D94C5] transition">Contact us</Link></li>
              <li><Link href="/company" className="hover:text-[#6D94C5] transition">Company Info</Link></li>
              <li><Link href="/stories" className="hover:text-[#6D94C5] transition">Summer Stories</Link></li>
              <li><Link href="/terms" className="hover:text-[#6D94C5] transition">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="hover:text-[#6D94C5] transition">Privacy Policy</Link></li>
              <li><Link href="/careers" className="hover:text-[#6D94C5] transition">Careers</Link></li>
            </ul>
          </div>

          
          <div>
            <h4 className="font-semibold text-gray-800 mb-3">Shop By</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/products?category=Sunglasses" className="hover:text-[#6D94C5] transition">Sunglasses</Link></li>
              <li><Link href="/products?category=Outfits" className="hover:text-[#6D94C5] transition">Summer Outfits</Link></li>
              <li><Link href="/products?category=Skincare" className="hover:text-[#6D94C5] transition">Skincare</Link></li>
              <li><Link href="/products?category=Accessories" className="hover:text-[#6D94C5] transition">Beach Accessories</Link></li>
              <li><Link href="/products?category=Hats" className="hover:text-[#6D94C5] transition">Hats & Caps</Link></li>
              <li><Link href="/products?category=Bags" className="hover:text-[#6D94C5] transition">Tote Bags</Link></li>
              <li><Link href="/products?category=Footwear" className="hover:text-[#6D94C5] transition">Sandals</Link></li>
            </ul>
          </div>

          
          <div>
            <h4 className="font-semibold text-gray-800 mb-3">Support</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/support" className="hover:text-[#6D94C5] transition">Support Center</Link></li>
              <li><Link href="/how-to-order" className="hover:text-[#6D94C5] transition">How to Order</Link></li>
              <li><Link href="/order-tracking" className="hover:text-[#6D94C5] transition">Order Tracking</Link></li>
              <li><Link href="/payment" className="hover:text-[#6D94C5] transition">Payment</Link></li>
              <li><Link href="/shipping" className="hover:text-[#6D94C5] transition">Shipping</Link></li>
              <li><Link href="/faq" className="hover:text-[#6D94C5] transition">FAQ</Link></li>
            </ul>
          </div>

          
          <div>
            <h4 className="font-semibold text-gray-800 mb-3">Consumer Policy</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/happy-return" className="hover:text-[#6D94C5] transition">Happy Return</Link></li>
              <li><Link href="/refund" className="hover:text-[#6D94C5] transition">Refund Policy</Link></li>
              <li><Link href="/exchange" className="hover:text-[#6D94C5] transition">Exchange</Link></li>
              <li><Link href="/cancellation" className="hover:text-[#6D94C5] transition">Cancellation</Link></li>
              <li><Link href="/pre-order" className="hover:text-[#6D94C5] transition">Pre-Order</Link></li>
              <li><Link href="/extra-discount" className="hover:text-[#6D94C5] transition">Extra Discount</Link></li>
            </ul>
          </div>

          
          <div>
            <h4 className="font-semibold text-gray-800 mb-3">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 p-2 rounded-full hover:bg-[#6D94C5] hover:text-white transition text-gray-600"
                aria-label="Facebook"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 p-2 rounded-full hover:bg-[#6D94C5] hover:text-white transition text-gray-600"
                aria-label="Twitter"
              >
                <FaTwitter size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 p-2 rounded-full hover:bg-[#6D94C5] hover:text-white transition text-gray-600"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 p-2 rounded-full hover:bg-[#6D94C5] hover:text-white transition text-gray-600"
                aria-label="YouTube"
              >
                <FaYoutube size={18} />
              </a>
            </div>
            
            <div className="mt-4">
              <Link href="/privacy" className="text-xs text-gray-500 hover:text-[#6D94C5] transition">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        
        <div className="border-t border-gray-200 mt-10 pt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} SunCart — All rights reserved. Designed for summer vibes.
        </div>
      </div>
    </footer>
  );
}