import { connectMongoDB } from "@/libs/google";
import User from "@/models/googleUser";
import { NextResponse } from "next/server";

export async function POST(request: any) {
  const { name, email } = await request.json();
  await connectMongoDB();
  await User.create({ name, email });
  return NextResponse.json({ message: " User Registered" }, { status: 201 });
}
