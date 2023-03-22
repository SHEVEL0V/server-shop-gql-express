/** @format */
import { Products } from "./products/index.js";
import { User } from "./user/index.js";

const resolvers = {
  Query: {
    ...User.resolvers.queries,
    ...Products.resolvers.queries,
  },
  // Mutation: {
  //   // ...Products.resolvers.mutations,
  //   // ...User.resolvers.mutations,
  // },
};

export default resolvers;
