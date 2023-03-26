/** @format */

import login from "./login.js";
import update from "./update.js";
import register from "./register.js";

const query = {
  loginUser: login,
};

const mutations = {
  registerUser: register,
  updateUser: update,
};

export const resolvers = { query, mutations };
