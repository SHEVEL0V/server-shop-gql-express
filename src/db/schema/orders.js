/** @format */
import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: {
      ref: "users",
      type: mongoose.Schema.Types.ObjectId,
      require: true,
    },
    orders: {
      type: [{}],
      require: true,
    },

    status: {
      type: String,
      enum: ["IDLE", "PENDING", "RESOLVED", "REJECTED"],
      default: "IDLE",
    },
  },
  { versionKey: false, timestamps: true }
);

export default mongoose.model("orders", orderSchema);
