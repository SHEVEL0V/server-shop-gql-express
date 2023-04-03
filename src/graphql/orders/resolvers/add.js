/** @format */
import OrderSchema from "../../../db/schema/orders.js";
import { ErrorHandler } from "../../../helpers/errors.js";

export default async (root, args, context) => {
  const { id, role } = context.token;
  const { add } = args;

  if (!role === "admin") {
    throw ErrorHandler("Not authorized", 401);
  }

  //---------add order to database------------------------//
  const newOrder = new OrderSchema({ orders: add, user: id });

  await newOrder.save();

  return { message: ` Order  added successfully` };
};
