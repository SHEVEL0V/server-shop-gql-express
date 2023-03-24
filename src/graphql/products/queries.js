/** @format */

export const queries = `#graphql

  getProducts( query:[String], limit:String, sort:String, page:String ) :ResProducts

  getProductById(id:String) : Product

  getProductsDesc : ProductDesc
`;
