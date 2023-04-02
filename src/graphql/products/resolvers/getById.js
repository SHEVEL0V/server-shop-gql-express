/** @format */
import productSchema from "../../../db/schema/product.js";

export default async (root, args, context) => {
  const { id } = args;

  //----------find product by id----------//
  const product = await productSchema.findById(id);

  return product;
};
