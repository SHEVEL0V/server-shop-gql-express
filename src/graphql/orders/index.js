/** @format */

import { resolvers } from "./resolvers/index.js";
import { readGql } from "../../helpers/readGqlFile.js";

export const Orders = {
  resolvers,
  types: readGql("./types.gql", import.meta.url),
  queries: `#graphql
         getOrders(query:QueryOrder) :[Orders]`,
  mutations: `#graphql
        addOrder(add: [AddOrder]):Message
        updateOrder(update:UpdateOrder):Message`,
};
