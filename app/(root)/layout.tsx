import { authOptions } from "@/libs/AuthOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";
import { ProtectedRootLayoutProps } from "../types/type";

export default async function ProtectedRootLayout({
  children,
}: ProtectedRootLayoutProps) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    redirect("/signup");
  }

  return <main>{children}</main>;
}
