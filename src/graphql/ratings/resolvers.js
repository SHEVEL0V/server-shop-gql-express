/** @format */
import { ErrorHandler } from "../../helpers/errors.js";
import productSchema from "../../db/schema/product.js";
import ratingSchema from "../../db/schema/rating.js";

const mutations = {
  updateRate: async (root, args, { token }) => {
    const { id } = token;
    const { itemId, rate } = args;

    if (!token) {
      throw new ErrorHandler("Not authorized ", 401);
    }

    //--------update Rating--------------//
    const RATE = await ratingSchema.findOneAndUpdate(
      { userId: id, itemId },
      { $set: { rate } }
    );

    //--------if Rating does not exist, so create--------------//
    if (!RATE) {
      const newRating = new ratingSchema({ userId: id, itemId, rate });
      await newRating.save();
    }
    //--------all ratings for a specific item--------------//
    const ratingItem = (await ratingSchema.find({ itemId })).map(
      (obj) => obj.rate
    );

    //--------round rating----------------//
    const ratingItemRound = Math.round(
      ratingItem.reduce((a, b) => a + b, 0) / ratingItem.length
    );
    //--------update product rating----------------//
    const response = await productSchema.findByIdAndUpdate(itemId, {
      $set: { rating: ratingItemRound },
    });

    return `Rating ${response.name} update successfully`;
  },
};

export const resolvers = { mutations };
