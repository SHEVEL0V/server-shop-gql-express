/** @format */

export const types = `#graphql

  enum RoleUser { 
    user 
    admin 
    }

  type User {
    name: String!
    telephone: String!
    password: String!
    email: String!
    role: RoleUser
    avatarURL: String
    verify: Boolean
    delivery: String
  }
`;
