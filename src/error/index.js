/** @format */

import { GraphQLError } from "graphql";

export const ErrorMessage = (message, code) => {
  throw new GraphQLError(message, {
    extensions: { code: code || "ERROR_CODE" },
  });
};
