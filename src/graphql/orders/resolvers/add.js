/** @format */
import OrderSchema from "../../../db/schema/orders.js";

export default async (root, args, context) => {
  const { id } = context.user;
  const { orders } = args;

  //---------add order to database------------------------//
  const newProduct = new OrderSchema({ orders, user: id });

  await newProduct.save();

  return newProduct;
};
