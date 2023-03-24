/** @format */

const mutations = {
  updateRate: (root, args, context) => {
    const { status, options } = args;
    //------if both status and options are not present, return error------//
    if (!options || !status) {
      throw new Error("Missing parameters ");
    }
    //------update  order status------//
    const response = options.map(
      async (id) => await Orders.findByIdAndUpdate(id, { $set: { status } })
    );

    return response;
  },
};

export const resolvers = { mutations };
