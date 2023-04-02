/** @format */
import bcrypt from "bcrypt";
import UserSchema from "../../../db/schema/user.js";
import { ErrorHandler } from "../../../helpers/errors.js";
import { uploadFileCloudStorage } from "../../../services/uploadFileCloudStorage.js";

export default async (root, { user }, { token }) => {
  const { file } = user;

  if (!token) {
    throw ErrorHandler("Not authorize", 401);
  }

  let avatarURL = user.avatarURL;

  // -----Upload avatar-----//
  if (file) {
    const img = await uploadFileCloudStorage(file);
    const avatarURL = img;
  }

  // -----Password hash-----//
  const password = user.password
    ? { password: await bcrypt.hash(user.password, 10) }
    : undefined;

  // -----Update User -----//
  await UserSchema.findByIdAndUpdate(token.id, {
    $set: { ...user, avatarURL, ...password },
  }).catch((err) => ErrorHandler("User not updated"));

  // -----Fin Update User -----//
  const newUser = await UserSchema.findById(token.id);

  return newUser;
};
