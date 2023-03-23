/** @format */
import UserSchema from "../../../db/schema/user.js";
import { ErrorMessage } from "../../../error/index.js";

export default async (root, args) =>
  args.id
    ? await UserSchema.findById(args.id)
    : ErrorMessage("Please enter your user ID");
