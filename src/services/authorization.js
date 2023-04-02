/** @format */
import jwt from "jsonwebtoken";

export const verifyToken = async (tokenBearer) => {
  if (!tokenBearer) {
    throw new Error("Please , provide a token");
  }

  const [type, token] = tokenBearer.split(" ");

  if (type !== "Bearer") {
    throw new Error("Token type not 'Bearer' ");
  }

  const user = jwt.verify(token, process.env.JWT_SECRET);

  return user;
};
