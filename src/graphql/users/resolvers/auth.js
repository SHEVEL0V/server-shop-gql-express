/** @format */
import jwt from "jsonwebtoken";
import UserSchema from "../../../db/schema/user.js";
import { verifyTokenGoogle } from "../../../services/verifyTokenGoogle.js";
import { ErrorHandler } from "../../../helpers/errors.js";

export default async (root, { token }, contextValue) => {
  //------Verify and decode token------//
  const { email } = await verifyTokenGoogle(token);

  //------is user exist------//
  const user = await UserSchema.findOne({ email });
  if (!user) {
    throw ErrorHandler("User not found", 404);
  }

  //-----Create new token -----//
  const { _id: id, role } = user;
  const newToken = jwt.sign({ id, role }, process.env.JWT_SECRET);

  return { user, token: newToken };
};
