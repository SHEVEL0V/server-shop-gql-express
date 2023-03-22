/** @format */
import productSchema from "../../db/schema/product.js";

const queries = {
  products: async (root, args) => await productSchema.find({}),

  productById: async (root, args) => await productSchema.findById(args.id),
};

const mutations = {};

export const resolvers = { queries, mutations };
