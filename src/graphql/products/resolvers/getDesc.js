/** @format */
import productSchema from "../../../db/schema/product.js";
import { filter } from "../../../services/filter.js";

export default async (root, args, context) => {
  const products = await productSchema.find();
  //----------find product price min-max ----------//
  const { price: max = 0 } = await productSchema.findOne().sort({ price: -1 });
  const { price: min = 0 } = await productSchema.findOne().sort({ price: 1 });

  return {
    price: [min, max],
    types: filter.types(products),
    brands: filter.brands(products),
    params: filter.params(products),
  };
};
