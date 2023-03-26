/** @format */
import { resolvers } from "./resolvers/index.js";
import { readGql } from "../../helpers/readGqlFile.js";

export const Products = {
  resolvers,
  types: readGql("./types.gql", import.meta.url),
  queries: `#graphql
      getProducts(query:QueryParams) :ResProducts
      getProductById(id:String) : Product
      getProductsDesc : ProductDesc
  `,
  mutations: `#graphql
      addProduct(product:InpProduct):Product   
      updateProduct(product:InpProduct):Product`,
};
