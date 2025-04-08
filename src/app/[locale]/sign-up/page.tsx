"use client";

import logo from "@/assets/images/logo.png";
import { SignUp } from "@/components/auth/SignUp/SignUp";
import Image from "next/image";

export default function SignUpPage() {
  return (
    <div className="w-screen h-screen bg-gradient-to-b from-[#EBEEF5] to-[#F3F4F6] flex items-center justify-center relative">
      <div className="absolute top-9 left-[38px] flex items-center gap-3 cursor-pointer">
        <Image src={logo.src} width={40} height={40} alt="logo" />
        <p className="text-2xl font-bold">Pool</p>
      </div>
      <SignUp />
    </div>
  );
}
