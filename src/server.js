/** @format */

import { ApolloServer } from "@apollo/server";
import graphqlUploadExpress from "graphql-upload/graphqlUploadExpress.mjs";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import express from "express";
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";
import { connectMongoDB } from "./db/connection.js";
import { verifyToken } from "./services/authorization.js";
import { typeDefs, resolvers } from "./graphql/index.js";

import * as dotenv from "dotenv";
import { log } from "console";
dotenv.config();

const app = express();
const httpServer = http.createServer(app);

const createContext = async ({ req }) => {
  const token = req.headers.authorization;

  return token ? { token: await verifyToken(token) } : {};
};

// Set up Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: false,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await server.start();

app.use(
  cors(),
  bodyParser.json(),
  graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }),
  expressMiddleware(server, { context: createContext })
);

await new Promise((resolve) =>
  httpServer.listen({ port: process.env.PORT || 4000 }, resolve)
);
console.log(`🚀 Server ready at http://localhost:${process.env.PORT}`);

await connectMongoDB().catch((err) => process.exit(1));
console.log("😄 MongoDB connection established ");
