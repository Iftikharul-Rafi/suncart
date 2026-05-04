"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simulate registration
    toast.success("Registration successful! Please login.");
    router.push("/login");
  };

  const handleGoogleSignIn = async () => {
    await signIn("google", { callbackUrl: "/" });
  };

  return (
    <div className="max-w-md mx-auto mt-10 card shadow-2xl p-6 animate__animated animate__fadeInUp bg-gray-800 text-white">
      <h1 className="text-3xl font-bold text-center mb-6">Register 📝</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-300 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#6D94C5]"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-300 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#6D94C5]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="url"
          placeholder="Photo URL (optional)"
          className="w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-300 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#6D94C5]"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password (min 4 chars)"
          className="w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-300 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#6D94C5]"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={4}
        />
        <button type="submit" className="w-full py-2 rounded-md bg-[#6D94C5] text-white font-semibold hover:bg-[#5a7fb0] transition">
          Register
        </button>
      </form>
      <div className="flex items-center justify-center gap-3 my-4">
        <div className="flex-1 h-px bg-gray-600"></div>
        <span className="text-gray-400 text-sm">OR</span>
        <div className="flex-1 h-px bg-gray-600"></div>
      </div>
      <button onClick={handleGoogleSignIn} className="w-full py-2 rounded-md border border-gray-500 text-white font-semibold hover:bg-gray-700 transition">
        Sign up with Google
      </button>
      <p className="text-center mt-4 text-gray-300">
        Already have an account? <Link href="/login" className="text-[#6D94C5] hover:underline">Login</Link>
      </p>
    </div>
  );
}