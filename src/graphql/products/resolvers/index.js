/** @format */
import get from "./get.js";
import getById from "./getById.js";
import getDesc from "./getDesc.js";
import add from "./add.js";
import update from "./update.js";

const query = {
  getProducts: get,
  getProductById: getById,
  getProductsDesc: getDesc,
};

const mutations = {
  addProduct: add,
  updateProduct: update,
};

export const resolvers = { query, mutations };
