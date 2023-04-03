/** @format */
import { Products } from "./products/index.js";
import { Users } from "./users/index.js";
import { Ratings } from "./ratings/index.js";
import { Orders } from "./orders/index.js";

const typeDefs = `#graphql
scalar Upload
scalar Date
type Message {message:String}

    ${Users.types}
    ${Products.types}
    ${Ratings.types}
    ${Orders.types}
     
  type Query {
    ${Users.queries}
    ${Products.queries}
    ${Orders.queries}
  }

  type Mutation {
    ${Users.mutations}
    ${Products.mutations}
    ${Orders.mutations}
    ${Ratings.mutations}
}

`;

export default typeDefs;
