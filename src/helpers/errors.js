/** @format */

import { GraphQLError } from "graphql";

export const ErrorHandler = (message, status = 400) => {
  if (401 === status) {
    throw new GraphQLError(message, {
      extensions: {
        code: "UNAUTHENTICATED",
        http: { status },
      },
    });
  }
  if (404 === status) {
    throw new GraphQLError(message, {
      extensions: {
        code: "NOT_FOUND",
        http: { status },
      },
    });
  } else {
    throw new GraphQLError(message, {
      extensions: {
        code: "BAD_REQUEST",
        http: { status },
      },
    });
  }
};
