/** @format */
import UserSchema from "../../../db/schema/user.js";
import bcrypt from "bcrypt";
import { GraphQLError } from "graphql";

export default async (root, args) => {
  const { password, email } = args;

  //-----Is email already in use?-----//
  const user = await UserSchema.findOne({ email });

  if (user) {
    GraphQLError("User already exists");
  }
  //-----Hash password-----//
  const passwordBcrypt = await bcrypt.hash(password, 10);

  //-----Save user to database-----//
  const newUser = new UserSchema({ ...req.body, password: passwordBcrypt });

  await newUser.save().catch((err) => GraphQLError("User not saved"));

  return newUser;
};
