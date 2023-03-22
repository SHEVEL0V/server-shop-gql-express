/** @format */

import mongoose from "mongoose";

mongoose.set("strictQuery", false);

export const connectMongoDB = async () => {
  //-----connectMongoDB-------------------//
  await mongoose.connect(process.env.MONGO_URL);
};
