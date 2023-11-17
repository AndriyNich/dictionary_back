const { ctrlWrapper } = require("../../helpers");

const { register } = require("./register");
const { login } = require("./login");
const { logout } = require("./logout");
const { getCurrent } = require("./getCurrent");
const { changePassword } = require("./changePassword");
const { updateUser } = require("./updateUser");

module.exports = {
  register: ctrlWrapper(register),
  login: ctrlWrapper(login),
  logout: ctrlWrapper(logout),
  getCurrent: ctrlWrapper(getCurrent),
  changePassword: ctrlWrapper(changePassword),
  updateUser: ctrlWrapper(updateUser),
};
