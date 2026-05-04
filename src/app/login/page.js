"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (result.error) {
      toast.error("Invalid email or password (use any email & password length >=4)");
    } else {
      toast.success("Login successful!");
      router.push(callbackUrl);
    }
  };

  const handleGoogleSignIn = async () => {
    await signIn("google", { callbackUrl });
  };

  return (
    <div className="max-w-md mx-auto mt-10 card shadow-2xl p-6 animate__animated animate__fadeInUp bg-gray-800 text-white">
      <h1 className="text-3xl font-bold text-center mb-6">Log in</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-300 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#6D94C5]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-300 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#6D94C5]"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="w-full py-2 rounded-md bg-[#6D94C5] text-white font-semibold hover:bg-[#5a7fb0] transition">
          Login
        </button>
      </form>
      <div className="flex items-center justify-center gap-3 my-4">
        <div className="flex-1 h-px bg-gray-600"></div>
        <span className="text-gray-400 text-sm">OR</span>
        <div className="flex-1 h-px bg-gray-600"></div>
      </div>
      <button onClick={handleGoogleSignIn} className="w-full py-2 rounded-md border border-gray-500 text-white font-semibold hover:bg-gray-700 transition">
        Sign in with Google
      </button>
      <p className="text-center mt-4 text-gray-300">
        New user? <Link href="/register" className="text-[#6D94C5] hover:underline">Register here</Link>
      </p>
    </div>
  );
}