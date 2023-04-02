/** @format */

import productSchema from "../../../db/schema/product.js";
import { uploadFileCloudStorage } from "../../../services/uploadFileCloudStorage.js";

export default async (root, args, context) => {
  const options = args.add;

  //---------upload file to google cloud storage---------//
  const file = args.add.file.promise;
  const img = await uploadFileCloudStorage(file);

  //-----create new product-----//
  const newProduct = new productSchema({
    ...options,
    img,
  });

  await newProduct.save();

  return  { message: `Products ${newProduct.name} add successfully` }
};
