/** @format */
import productSchema from "../../../db/schema/product.js";
import { searchParams } from "../../../services/products/searchParams.js";
import { sortParams } from "../../../services/products/sortParams.js";

export default async (root, args, context) => {
  const { limit, sort, page } = args.query || {};

  const results = await productSchema
    //----------find product and sort and skip and limit ----------//
    .find(searchParams(page))
    .sort(sortParams(sort))
    .skip(page ? limit * (page - 1) : null)
    .limit(limit);

  if (!results) {
    throw new Error("Error find products");
  }
  //--------count products--------//
  const count = await productSchema.countDocuments(searchParams(page));

  if (!count) {
    throw new Error("Error find count products");
  }

  return { count, results };
};
