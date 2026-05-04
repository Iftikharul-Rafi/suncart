"use client";

import { useState } from "react";
import { useSession, update } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function UpdateProfilePage() {
  const { data: session, update: updateSession } = useSession();
  const router = useRouter();

  const [name, setName] = useState(session?.user?.name || "");
  const [image, setImage] = useState(session?.user?.image || "");
  const [loading, setLoading] = useState(false);

  if (!session) {
    router.push("/login");
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      
      const result = await updateSession({
        name: name,
        image: image,
      });

      toast.success("Profile updated successfully!");
      router.push("/profile");
    } catch (error) {
      console.error("Update error:", error);
      toast.error("Failed to update profile. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md border border-gray-100">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Update Information
      </h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6D94C5] focus:border-transparent outline-none"
            placeholder="Enter your name"
          />
        </div>

        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Profile Image URL
          </label>
          <input
            type="url"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6D94C5] focus:border-transparent outline-none"
            placeholder="https://example.com/avatar.jpg"
          />
          {image && (
            <div className="mt-2 flex justify-center">
              <img
                src={image}
                alt="Preview"
                className="w-16 h-16 rounded-full object-cover border"
              />
            </div>
          )}
        </div>

        
        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 bg-[#6D94C5] text-white rounded-full hover:bg-[#5a7fb0] transition disabled:opacity-50"
        >
          {loading ? "Updating..." : "Update Information"}
        </button>
      </form>
    </div>
  );
}