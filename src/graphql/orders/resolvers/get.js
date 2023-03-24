/** @format */

import OrderSchema from "../../../db/schema/orders.js";

export default async (root, args, context) => {
  const { status, date = undefined } = args;

  //-----------optional  params status-----------//
  const searchStatus = status ? { status } : undefined;
  //-----------optional  params date------------//
  const DATE = date?.split("-")?.map((e) => Number(e));
  const searchDate = DATE
    ? {
        createdAt: {
          $gte: new Date(DATE[0], DATE[1] - 1, DATE[2]),
          $lte: new Date(DATE[0], DATE[1] - 1, DATE[2] + 1),
        },
      }
    : undefined;
  //-----------find all orders----------------------//
  const orders = await OrderSchema.find({
    ...searchStatus,
    ...searchDate,
  }).populate("user");

  return orders;
};
