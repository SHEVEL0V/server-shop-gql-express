/** @format */
import productSchema from "../../../db/schema/product.js";
import { GraphQLError } from "graphql";

export default async (root, args, context) => {
  const { id } = args;

  //----------find product by id----------//
  const products = await productSchema.findById(id);

  if (!products) {
    throw new GraphQLError("Product not found");
  }

  return products;
};
