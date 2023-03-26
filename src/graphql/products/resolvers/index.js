/** @format */
import get from "./get.js";
import getById from "./getById.js";
import getDesc from "./getDesc.js";
import add from "./add.js";
import update from "./update.js";
import { wrapper } from "../../../helpers/wrapper.js";

const query = {
  getProducts: wrapper(get),
  getProductById: getById,
  getProductsDesc: getDesc,
};

const mutations = {
  addProduct: add,
  updateProduct: update,
};

export const resolvers = { query, mutations };
