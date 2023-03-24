/** @format */

export const types = `#graphql

type Param {
    name: String
    value : String
    
  }

  type Product {
    _id: ID
    name: String
    price: Int
    rating: Int
    img: String
    type: String
    brand: String
    desc:String
    params:[Param]


    
  }


  type ProductDesc{
    price: [Int],
    types: String
    brands: String
    params:[Param]
  }

  type ResProducts { 
    results: [Product]
    count: Int!
    }


   
  

 
  
`;
