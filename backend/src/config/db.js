import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://ujjwalverma010305_db_user:RuWQnyhQqL0jE8LG@cluster0.kbzprpb.mongodb.net/ecommerce?retryWrites=true&w=majority&tls=true"
    );
    console.log(`✅ Connected to MONGODB: ${conn.connection.host}`);
  } catch (error) {
    console.error(" MONGODB connection error", error);
    process.exit(1);
  }
};
