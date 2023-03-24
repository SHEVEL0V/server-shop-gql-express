/** @format */

export const mutations = `#graphql

    registerUser(password: String!, email: String!):ResUser

    loginUser(password: String!, email: String!):ResUser

    updateUser(id: String!) : User

`;
