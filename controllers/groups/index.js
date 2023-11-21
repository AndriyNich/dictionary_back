const { ctrlWrapper } = require("../../helpers");

const { add } = require("./add");
const { getList } = require("./getList");
const { update } = require("./update");

module.exports = {
  add: ctrlWrapper(add),
  getList: ctrlWrapper(getList),
  update: ctrlWrapper(update),
};
