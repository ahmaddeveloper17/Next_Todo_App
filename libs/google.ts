import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    if (!process.env.DATABASE_URL) {
      throw new Error("DATABASE_URL is not defined in environment variables.");
    }

    await mongoose.connect(process.env.DATABASE_URL);
  } catch (error) {
  }
};
