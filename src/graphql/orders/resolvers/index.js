/** @format */
import get from "./get.js";
import update from "./update.js";
import add from "./add.js";
import { wrapper } from "../../../helpers/wrapper.js";

const query = {
  getOrders: wrapper(get),
};

const mutations = {
  updateOrder: wrapper(update),
  addOrder: wrapper(add),
};

export const resolvers = { query, mutations };
