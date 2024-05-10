import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

// POST API

export const POST = async (request: NextRequest) => {
  const prisma = new PrismaClient();

  try {
    const { TaskName, TaskId } = await request.json();

    if (!TaskName || !TaskId) {
      return new NextResponse("Missing something", {
        status: 400,
      });
    }
    try {
      const todoTask = await prisma.task.create({
        data: {
          TaskName,
          TaskId,
        },
      });
      return new NextResponse(
        JSON.stringify({ data: todoTask, success: true }),
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

// GET API

export const GET = async () => {
  try {
    const prisma = new PrismaClient();
    const response = await prisma.task.findMany();
    return new NextResponse(JSON.stringify(response), { status: 200 });
  } catch (error) {}
};

// DELETE API

export const DELETE = async (request: NextRequest) => {
  try {
    const prisma = new PrismaClient();
    const id = await request.nextUrl.searchParams.get("id");
    if (!id) {
      return new NextResponse("Missing task ID", {
        status: 404,
      });
    }
    const deletedTask = await prisma.task.delete({
      where: {
        id: id,
      },
    });
    return new NextResponse(JSON.stringify(deletedTask), { status: 200 });
  } catch (error) {
    return new NextResponse(JSON.stringify(error), { status: 500 });
  }
};
