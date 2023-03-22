/** @format */
import { ApolloServer } from "@apollo/server";
import { typeDefs, resolvers } from "./graphql/index.js";

export const server = new ApolloServer({
  typeDefs,
  resolvers,
});
