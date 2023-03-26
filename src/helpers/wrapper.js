/** @format */
import { GraphQLError } from "graphql";

export const wrapper =
  (fun) =>
  async (...args) => {
    try {
      return await fun(...args);
    } catch (err) {
      console.error(`🔴 ${err.message} `);
      throw new GraphQLError(err.message, {
        extensions: {
          code: "Bad request",
          http: { status: 400 },
        },
      });
    }
  };
