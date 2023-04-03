/** @format */
import { ErrorHandler } from "../../../helpers/errors.js";
import OrderSchema from "../../../db/schema/orders.js";

export default async (root, args, context) => {
  const status = args?.query?.status;
  const date = args?.query?.date;

  if (!context?.token?.role === "admin") {
    throw ErrorHandler("Not authorized", 401);
  }

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
