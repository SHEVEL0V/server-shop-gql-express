/** @format */

import productSchema from "../../../db/schema/product.js";
import { uploadFile } from "../../../services/upload.js";
import { GraphQLError } from "graphql";

export default async (root, args, context) => {
  const { path, filename } = args.file || {};
  const { id } = args;
  // const options = JSON.parse(req.body.options);

  let img = args.img;
  //-------if img is not present in the request body------------------------//
  if (path) {
    //-------upload the image to google cloud storage-----------------------//
    const { mediaLink } = await uploadFile(path, filename);

    if (!mediaLink) {
      throw new GraphQLError("Error uploading image to cloud storage");
    }
  }
  //-------update the product in the database-------------------------------//
  const response = await productSchema.findByIdAndUpdate(id, {
    ...req.body,
    img: mediaLink,
    options,
  });

  if (!response) {
    throw new GraphQLError("Error updating product");
  }

  return response;
};
