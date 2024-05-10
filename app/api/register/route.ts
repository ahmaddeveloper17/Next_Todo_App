import { NextResponse } from "next/server";
import prismadb from "@/libs/prismadb";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, password } = body;

    if (!email || !password) {
      return new NextResponse("Missing data", { status: 500 });
    }

    const userAlreadyExist = await prismadb.user.findFirst({
      where: {
        email: email,
      },
    });

    if (userAlreadyExist?.email) {
      return new NextResponse("User already exists", { status: 500 });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await prismadb.user.create({
      data: {
        name: name,
        email: email,
        hashedPassword: hashedPassword,
      },
    });
    return new NextResponse(
      JSON.stringify({ userId: newUser.id, userData: newUser }),
      { status: 200 }
    );
  } catch (err: any) {
    return new NextResponse(err, { status: 500 });
  }
}
