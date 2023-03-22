/** @format */
import UserSchema from "../../db/schema/user.js";

const queries = {
  user: (root, args) => UserSchema.findById(args.id),
};

const mutations = {};

export const resolvers = { queries, mutations };
