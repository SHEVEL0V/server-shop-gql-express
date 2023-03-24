/** @format */
import bcrypt from "bcrypt";
import UserSchema from "../../../db/schema/user.js";
import { ErrorMessage } from "../../../error/index.js";
import { uploadFile } from "../../../services/upload.js";

export default async (root, args, contextValue) => {
  const { path, filename } = args.file;
  const { id } = contextValue.user;
  const { body } = args;

  let avatarURL = body.picture;

  // -----Upload avatar-----//
  if (path) {
    const { mediaLink } = await uploadFile(path, filename);
    avatarURL = mediaLink;
  }

  // -----Password hash-----//
  const password = body.password
    ? { password: await bcrypt.hash(body.password, 10) }
    : undefined;

  // -----Update User -----//
  await UserSchema.findByIdAndUpdate(id, {
    $set: { ...body, avatarURL, ...password },
  }).catch((err) => ErrorMessage("User not updated", err.message));

  // -----Fin Update User -----//
  const newUser = await UserSchema.findById(id);

  return newUser;
};
