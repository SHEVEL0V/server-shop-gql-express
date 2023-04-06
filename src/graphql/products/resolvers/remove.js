/** @format */
import productSchema from "../../../db/schema/product.js";

export default async (root, { ids }, context) => {
  //-------remove the product in the database-------------------------------//
  const res = await Promise.all(
    ids.map(async (id) => await productSchema.findByIdAndDelete(id))
  );

  return res;
};
