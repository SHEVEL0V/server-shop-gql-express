/** @format */
import jwt from "jsonwebtoken";
import { verifyTokenGoogle } from "./verifyTokenGoogle.js";

export const verifyToken = async (token) => {
  if (!token) {
    throw new Error("Please , provide a token");
  }

  const [type] = token.split(" ");

  if (type !== "Bearer") {
    throw new Error("Token type not 'Bearer' ");
  }

  const user = jwt.verify(token, process.env.JWT_SECRET);

  if (!user) {
    const userGoogle = await verifyTokenGoogle(token);

    return userGoogle;
  }

  return user;
};
