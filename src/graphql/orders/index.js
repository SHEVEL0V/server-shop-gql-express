/** @format */

import { resolvers } from "./resolvers/index.js";
import { readGql } from "../../helpers/readGqlFile.js";

export const Orders = {
  resolvers,
  types: readGql("./types.gql", import.meta.url),
  queries: `#graphql
         getOrders(query:QueryOrder) :[UserOrders]`,
  mutations: `#graphql
       addOrder(add: [AddOrder]):UserOrders
       updateOrder(update:UpdateOrder):[UserOrders]
       `,
};
