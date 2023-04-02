/** @format */
import get from "./get.js";
import auth from "./auth.js";
import login from "./login.js";
import update from "./update.js";
import register from "./register.js";
import { wrapper } from "../../../helpers/wrapper.js";

const query = {
  getUser: wrapper(get),
};

const mutations = {
  authUser: wrapper(auth),
  loginUser: wrapper(login),
  registerUser: wrapper(register),
  updateUser: wrapper(update),
};

export const resolvers = { query, mutations };
