const userModel = require("../model/userModel");
// const bcrypt= require("bcrypt");

module.exports = {
  createUser: async function (body) {
    const data = await userModel.createUser(body);
    return data;
  },
  getUser: async function (body) {
    const data = await userModel.getUser(body);
    return data;
  },
  getUserById: async function (id) {
    const data = await userModel.getUserById(id);
    return data;
  },
  updateUser: async function (body) {
    const data = await userModel.updateUser(body);
    return data;
  },
  deleteUser: async function (id) {
    const user = await userModel.getUserById(id);
    if (user.count != 0) {
      return "user already exists!";
    }
    const data = await userModel.deleteUser(id);

    return data;
  },
};
