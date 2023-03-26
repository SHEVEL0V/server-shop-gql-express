/** @format */
import { readGql } from "../../helpers/readGqlFile.js";
import { resolvers } from "./resolvers.js";
export const Ratings = {
  resolvers,
  types: readGql("./types.gql", import.meta.url),
  mutations: `#graphql
            updateRate( status:String, options:String): Rate`,
};
