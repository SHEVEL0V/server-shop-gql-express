/** @format */
import UserSchema from "../../../db/schema/user.js";
import { verifyToken } from "../../../services/verifyToken.js";

export default async (root, args, contextValue) => {
  const { token } = contextValue;

  //------Verify and decode token------//
  const { email } = await verifyToken(token);

  //------is user exist------//
  let user = await UserSchema.findOne({ email });

  return user;
};
