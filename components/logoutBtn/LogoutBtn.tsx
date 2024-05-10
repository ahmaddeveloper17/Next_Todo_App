"use client";

import { signOut } from "next-auth/react";
import React from "react";
import { Images } from "@/constants/constants";
import Image from "next/image";

export default function LogoutBtn() {
  return (
    <div
      onClick={() => {
        signOut();
      }}
    >
      <button className="ml-[24px] pt-[24px] absolute right-[24px]">
        <Image src={Images.logoutIcon} alt="" />
      </button>
    </div>
  );
}
