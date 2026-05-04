"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Main Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 px-4 py-3 flex items-center justify-between flex-wrap">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">☀️</span>
          <span className="text-xl font-bold text-gray-800">
            Sun<span className="text-[#6D94C5]">Cart</span>
          </span>
        </Link>

        {/* Hamburger Icon (mobile only) */}
        <button
          className="block md:hidden text-3xl text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
          <Link href="/" className="hover:text-[#6D94C5]">Home</Link>
          <Link href="/products" className="hover:text-[#6D94C5]">Products</Link>
          {session && (
            <Link href="/profile" className="hover:text-[#6D94C5]">My Profile</Link>
          )}
        </div>

        {/* Desktop Auth */}
        <div className="hidden md:flex items-center gap-3">
          {session ? (
            <>
              <Image
                src={session.user?.image || "/default-avatar.png"}
                alt="user"
                width={32}
                height={32}
                className="rounded-full border-2 border-[#6D94C5]"
              />
              <button
                onClick={() => signOut()}
                className="px-3 py-1 rounded-full bg-[#6D94C5] text-white text-sm hover:bg-[#5a7fb0]"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="px-3 py-1 rounded-full border border-[#6D94C5] text-[#6D94C5] hover:bg-[#6D94C5] hover:text-white">
                Login
              </Link>
              <Link href="/register" className="px-3 py-1 rounded-full bg-[#6D94C5] text-white hover:bg-[#5a7fb0]">
                Register
              </Link>
            </>
          )}
        </div>
      </nav>

      {/* Mobile Menu (visible when menuOpen is true) */}
      {menuOpen && (
        <div className="fixed top-[60px] left-0 w-full bg-white shadow-md z-40 md:hidden">
          <div className="flex flex-col p-4 space-y-3 text-gray-700">
            <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-[#6D94C5] py-1">
              Home
            </Link>
            <Link href="/products" onClick={() => setMenuOpen(false)} className="hover:text-[#6D94C5] py-1">
              Products
            </Link>
            {session && (
              <Link href="/profile" onClick={() => setMenuOpen(false)} className="hover:text-[#6D94C5] py-1">
                My Profile
              </Link>
            )}
            <hr className="my-2" />
            {session ? (
              <>
                <div className="flex items-center gap-2">
                  <Image
                    src={session.user?.image || "/default-avatar.png"}
                    alt="user"
                    width={28}
                    height={28}
                    className="rounded-full"
                  />
                  <span className="text-sm font-medium">{session.user?.name?.split(" ")[0]}</span>
                </div>
                <button
                  onClick={() => {
                    signOut();
                    setMenuOpen(false);
                  }}
                  className="px-3 py-1 rounded-full bg-[#6D94C5] text-white text-sm w-full"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  onClick={() => setMenuOpen(false)}
                  className="px-3 py-1 text-center rounded-full border border-[#6D94C5] text-[#6D94C5] hover:bg-[#6D94C5] hover:text-white"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  onClick={() => setMenuOpen(false)}
                  className="px-3 py-1 text-center rounded-full bg-[#6D94C5] text-white hover:bg-[#5a7fb0]"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}