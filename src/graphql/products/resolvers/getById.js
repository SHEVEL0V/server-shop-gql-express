/** @format */
import productSchema from "../../../db/schema/product.js";

export default async (root, args, context) => {
  const { id } = args;

  //----------find product by id----------//
  const products = await productSchema.findById(id, [
    "-createdAt",
    "-updatedAt",
  ]);

  return products;
};
