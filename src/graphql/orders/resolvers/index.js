/** @format */
import get from "./get.js";
import update from "./update.js";
import add from "./add.js";

const query = {
  getOrders: get,
};

const mutations = {
  updateOrder: update,
  addOrder: add,
};

export const resolvers = { query, mutations };
