/** @format */

import { resolvers } from "./resolvers/index.js";
import { readGql } from "../../helpers/readGqlFile.js";

export const Users = {
  resolvers,
  types: readGql("./types.gql", import.meta.url),
  queries: `#graphql
      getUser:User`,
  mutations: `#graphql
      authUser(token:String!):ResUser
      loginUser(user: InpUserLog):ResUser
      registerUser(user:InpUserReg):ResUser
      updateUser(user: InpUserUpdate) : Message`,
};
