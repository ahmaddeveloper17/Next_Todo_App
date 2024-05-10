import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

const hashPassword = async (password: string) => {
  return await bcrypt.hash(password, 10);
};

export const PUT = async (request: NextRequest) => {
  try {
    const prisma = new PrismaClient();
    const { email, newPassword } = await request.json();

    if (!email || !newPassword) {
      return NextResponse.json({
        error: "Email and new password are required",
      });
    }

    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" });
    }

    const hashedPassword = await hashPassword(newPassword);

    await prisma.user.update({
      where: {
        email: email,
      },
      data: {
        hashedPassword: hashedPassword,
      },
    });
    await prisma.$disconnect();

    return NextResponse.json({ result: "success" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal server error" });
  }
};
