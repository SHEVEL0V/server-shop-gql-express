/** @format */
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs, resolvers } from "./graphql/index.js";
import { connectMongoDB } from "./db/connection.js";
import { verifyToken } from "./services/authorization.js";

import * as dotenv from "dotenv";
dotenv.config();

export const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: process.env.PORT || 4000 },

  context: async ({ req, res }) => {
    const token = req.headers.authorization;
    return token ? await verifyToken(token) : {};
  },
});

console.log(`🚀 Server ready at ${url}`);

await connectMongoDB().catch((err) => process.exit(1));

console.log("😄 MongoDB connection established ");
