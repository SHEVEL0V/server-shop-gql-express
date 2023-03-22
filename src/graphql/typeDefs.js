/** @format */
import { Products } from "./products/index.js";
import { User } from "./user/index.js";

const typeDefs = `#graphql
${Products.types}
${User.types}
 
  
  type Query {
    ${Products.queries}
    ${User.queries}
   

  
  
  }
  

`;

export default typeDefs;
