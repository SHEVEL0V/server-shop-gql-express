/** @format */

import productSchema from "../../../db/schema/product.js";
import { uploadFile } from "../../../services/upload.js";

export default async (root, args, context) => {
  const { path, filename } = args.file;
  const options = args;

  //------parse options to json------//
  //   const options = JSON.parse(req.body.options);
  //---------upload file to google cloud storage---------//
  const { mediaLink } = await uploadFile(path, filename);
  //-----create new product-----//
  const newProduct = new productSchema({
    ...req.body,
    img: mediaLink,
    options,
  });

  await newProduct.save();

  return newProduct;
};
