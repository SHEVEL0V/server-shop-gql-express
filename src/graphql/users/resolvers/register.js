/** @format */
import { ErrorMessage } from "../../../error/index.js";
import UserSchema from "../../../db/schema/user.js";
import bcrypt from "bcrypt";

export default async (root, args) => {
  const { password, email } = args;

  //-----Is email already in use?-----//
  const user = await UserSchema.findOne({ email });

  if (user) {
    ErrorMessage("User already exists", 400);
  }
  //-----Hash password-----//
  const passwordBcrypt = await bcrypt.hash(password, 10);

  //-----Save user to database-----//
  const newUser = new UserSchema({ ...req.body, password: passwordBcrypt });

  await newUser.save();

  return newUser;
};
