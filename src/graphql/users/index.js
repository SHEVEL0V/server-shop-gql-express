/** @format */

import { resolvers } from "./resolvers/index.js";
import { readGql } from "../../helpers/readGqlFile.js";

export const Users = {
  resolvers,
  types: readGql("./types.gql", import.meta.url),
  queries: `#graphql
      loginUser(password: String!, email: String!):ResUser
`,

  mutations: `#graphql
      registerUser(password: String!, email: String!):ResUser
      updateUser(id: String!) : User`,
};
