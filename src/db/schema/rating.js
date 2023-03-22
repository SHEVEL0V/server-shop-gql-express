/** @format */
import mongoose from "mongoose";

const ratingSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
    },

    itemId: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
    },

    rate: { type: Number, default: 0 },
  },
  { versionKey: false, timestamps: true }
);

export default mongoose.model("Ratings", ratingSchema);
