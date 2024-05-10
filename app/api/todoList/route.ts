import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
// POST
export const POST = async (request: NextRequest) => {
  const prisma = new PrismaClient();

  try {
    const { ListName, Email, bgColor, label, textColor, borderColor } =
      await request.json();

    if (
      !ListName &&
      !Email &&
      !bgColor &&
      !label &&
      !textColor &&
      !borderColor
    ) {
      return new NextResponse("Missing something", {
        status: 400,
      });
    }
    try {
      const todoList = await prisma.list.create({
        data: {
          ListName,
          Email,
          bgColor,
          label,
          textColor,
          borderColor,
        },
      });
      return new NextResponse(
        JSON.stringify({ data: todoList, success: true }),
        {
          status: 200,
        }
      );
    } catch (error) {
      return new NextResponse(JSON.stringify(error), { status: 400 });
    }
  } catch (error) {
    return new NextResponse("Internal Server Error", {
      status: 500,
    });
  }
};
// GET
export const GET = async () => {
  try {
    const prisma = new PrismaClient();
    const todoData = await prisma.list.findMany({});
    return new NextResponse(JSON.stringify(todoData), {
      status: 200,
    });
  } catch (error) {
    throw new Error("Failed to fetch todo list data");
  }
};

// DELETE
export const DELETE = async (request: NextRequest) => {
  try {
    const prisma = new PrismaClient();
    const id = await request.nextUrl.searchParams.get("id");
    if (!id) {
      return new NextResponse("Missing task ID", {
        status: 404,
      });
    }
    const deletedlist = await prisma.list.delete({
      where: {
        id: id,
      },
    });
    return new NextResponse(JSON.stringify(deletedlist), { status: 200 });
  } catch (error) {
    return new NextResponse(JSON.stringify(error), { status: 500 });
  }
};

// PUT

export const PUT = async (request: NextRequest) => {
  try {
    const prisma = new PrismaClient();
    const { list, id } = await request.json();

    await prisma.list.update({
      where: {
        id: id,
      },
      data: {
        ListName: list,
      },
    });
    return NextResponse.json({ result: "success" });
  } catch (error) {
    return NextResponse.json({ error: "error" });
  }
};
