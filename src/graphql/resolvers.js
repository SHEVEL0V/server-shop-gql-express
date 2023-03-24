/** @format */
import { Products } from "./products/index.js";
import { Users } from "./users/index.js";
import { Ratings } from "./ratings/index.js";
import { Orders } from "./orders/index.js";

const resolvers = {
  Query: {
    ...Users.resolvers.query,
    ...Products.resolvers.query,
    ...Orders.resolvers.query,
  },
  Mutation: {
    ...Users.resolvers.mutations,
    ...Products.resolvers.mutations,
    ...Ratings.resolvers.mutations,
    ...Orders.resolvers.mutations,
  },
};

export default resolvers;
