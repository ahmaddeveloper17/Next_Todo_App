"use client";

import { SessionProvider } from "next-auth/react";
import React from "react";
import { NextAuthSessionProviderProps } from "@/app/types/type";

export default function NextAuthSessionProvider({
  children,
}: NextAuthSessionProviderProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
