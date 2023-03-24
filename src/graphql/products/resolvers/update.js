/** @format */

import productSchema from "../../../db/schema/product.js";
import { uploadFile } from "../../../services/upload.js";

export default async (root, args, context) => {
  const { path, filename } = args.file || {};
  const { id } = args;
  // const options = JSON.parse(req.body.options);

  let img = args.img;
  //-------if img is not present in the request body------------------------//
  if (path) {
    //-------upload the image to google cloud storage-----------------------//
    const { mediaLink } = await uploadFile(path, filename);
    img = mediaLink;
  }
  //-------update the product in the database-------------------------------//
  const response = await productSchema.findByIdAndUpdate(id, {
    ...req.body,
    img,
    options,
  });

  return response;
};
