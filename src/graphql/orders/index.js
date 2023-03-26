/** @format */

import { resolvers } from "./resolvers/index.js";
import { readGql } from "../../helpers/readGqlFile.js";

export const Orders = {
  resolvers,
  types: readGql("./types.gql", import.meta.url),
  queries: `#graphql
         getOrders :Order`,
  mutations: `#graphql
        addOrder(id: String):Order
        updateOrder(status:String, options:String):Order`,
};
