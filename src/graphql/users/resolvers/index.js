/** @format */

import login from "./login.js";
import update from "./update.js";
import auth from "./auth.js";
import register from "./register.js";

const query = {
  authUser: auth,
};

const mutations = {
  registerUser: register,
  loginUser: login,
  updateUser: update,
};

export const resolvers = { query, mutations };
