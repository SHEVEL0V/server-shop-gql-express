/** @format */
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import UserSchema from "../../../db/schema/user.js";
import { ErrorMessage } from "../../../error/index.js";

export default async (root, args) => {
  const { password, email } = args;

  //------Is email exist?------//
  const user = await UserSchema.findOne({ email });

  if (!user) {
    ErrorMessage(`No user with email: ${email} found`, 401);
  }
  //------Password Validation-----//
  if (!(await bcrypt.compare(password, user.password))) {
    ErrorMessage(`password:${password} is wrong  `, 401);
  }

  const token = jwt.sign({ id, role }, process.env.JWT_SECRET);

  return user;
};
