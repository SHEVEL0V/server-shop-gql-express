/** @format */
import UserSchema from "../../../db/schema/user.js";
import bcrypt from "bcrypt";
import { ErrorHandler } from "../../../helpers/errors.js";
import jwt from "jsonwebtoken";

export default async (root, args) => {
  const { password, email, telephone, name } = args.user;

  //-----Is email already in use?-----//
  const user = await UserSchema.findOne({ email });

  if (user) {
    throw ErrorHandler("User already exists");
  }
  //-----Hash password-----//
  const passwordBcrypt = await bcrypt.hash(password, 10);

  //-----Save user to database-----//
  const newUser = new UserSchema({
    email,
    telephone,
    name,
    password: passwordBcrypt,
  });

  await newUser.save().catch((err) => ErrorHandler("User not saved"));

  //-----Create new token -----//
  const { _id: id, role } = newUser;
  const token = jwt.sign({ id, role }, process.env.JWT_SECRET);

  return { user: newUser, token };
};
