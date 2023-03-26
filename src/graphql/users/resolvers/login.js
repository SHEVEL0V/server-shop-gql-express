/** @format */
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import UserSchema from "../../../db/schema/user.js";
import { GraphQLError } from "graphql";

export default async (root, args) => {
  const { password, email } = args;

  //------Is email exist?------//
  const user = await UserSchema.findOne({ email });

  if (!user) {
    GraphQLError(`No user with email: ${email} found`);
  }
  //------Password Validation-----//
  if (!(await bcrypt.compare(password, user.password))) {
    GraphQLError(`Password:${password} is wrong  `);
  }

  const token = jwt.sign({ id, role }, process.env.JWT_SECRET);

  return { user, token };
};
