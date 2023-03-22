/** @format */

export const queries = `#graphql
  products(id:String) : [Product!]!

  productById(id:String) : Product!
`;
