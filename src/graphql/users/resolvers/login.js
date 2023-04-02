/** @format */
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import UserSchema from "../../../db/schema/user.js";
import { ErrorHandler } from "../../../helpers/errors.js";

export default async (root, args) => {
  const { password, email } = args.user;

  //------Is email exist?------//
  const user = await UserSchema.findOne({ email });

  if (!user) {
    throw ErrorHandler("User not found", 404);
  }
  //------Password Validation-----//
  if (!(await bcrypt.compare(password, user.password))) {
    throw ErrorHandler("Password does not match", 401);
  }

  const { _id: id, role } = user;

  const token = jwt.sign({ id, role }, process.env.JWT_SECRET);

  return { user, token };
};
