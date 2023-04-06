/** @format */

import productSchema from "../../../db/schema/product.js";
import { uploadFileCloudStorage } from "../../../services/uploadFileCloudStorage.js";

export default async (root, { update }, context) => {
  const { id, img } = update;

  let mediaLink = img;

  //---------upload file to google cloud storage---------//
  const file = update.file.promise;
  if (file) {
    mediaLink = await uploadFileCloudStorage(file);
  }

  //-------update the product in the database-------------------------------//
  const response = await productSchema.findByIdAndUpdate(id, {
    $set: { ...update, img: mediaLink },
  });

  return response;
};
