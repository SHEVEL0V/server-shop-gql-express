/** @format */
import * as dotenv from "dotenv";
dotenv.config();
import { startStandaloneServer } from "@apollo/server/standalone";
import { server } from "./src/app.js";
import { connectMongoDB } from "./src/db/connection.js";

const { url } = await startStandaloneServer(server, {
  listen: { port: process.env.PORT || 4000 },
});
console.log(`🚀 Server ready at ${url}`);

await connectMongoDB().catch((err) => process.exit(1));

console.log("😄 MongoDB connection established ");
