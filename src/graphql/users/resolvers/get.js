/** @format */
import UserSchema from "../../../db/schema/user.js";
import { ErrorHandler } from "../../../helpers/errors.js";

export default async (root, arg, { token }) => {
  //-----is token exist------//
  if (!token) {
    throw ErrorHandler("Not authorize", 401);
  }

  //-----Get user -----//
  const newUser = await UserSchema.findById(token.id);

  return newUser;
};
