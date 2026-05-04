"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function ProfilePage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div className="text-center mt-10">Loading profile...</div>;
  }

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md border border-gray-100">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        My Profile
      </h1>

      
      <div className="flex flex-col items-center gap-4">
        
        <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-[#6D94C5] shadow-md">
          <Image
            src={session.user?.image || "/default-avatar.png"}
            alt="Profile Picture"
            fill
            className="object-cover"
          />
        </div>

        
        <h2 className="text-2xl font-bold text-gray-800">
          {session.user?.name || "User Name"}
        </h2>

        
        <p className="text-gray-500">{session.user?.email}</p>

        
        <Link
          href="/profile/update"
          className="mt-4 px-6 py-2 bg-[#6D94C5] text-white rounded-full hover:bg-[#5a7fb0] transition shadow-sm"
        >
          Update Profile
        </Link>
      </div>
    </div>
  );
}