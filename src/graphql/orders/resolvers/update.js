/** @format */
import { ErrorHandler } from "../../../helpers/errors.js";
import OrderSchema from "../../../db/schema/orders.js";

export default async (root, args, context) => {
  const { status, ids } = args?.update;

  if (!context?.token?.role === "admin") {
    throw ErrorHandler("Not authorized", 401);
  }

  //------update  order status------//
  const res = await Promise.all(
    ids.map(
      async (id) =>
        await OrderSchema.findByIdAndUpdate(id, { $set: { status } }).populate(
          "user"
        )
    )
  );

  return res;
};
