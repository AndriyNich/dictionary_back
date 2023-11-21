const { getMsgByLang, MESSAGES_NAME } = require("../../constants");
const { HttpError } = require("../../helpers");
const { GroupModel } = require("../../models");

const add = async (req, res) => {
  const { name } = req.body;
  const user = req.user;

  const group = await GroupModel.Group.findOne({ userId: user._id, name });

  if (group) {
    throw HttpError(409, getMsgByLang(req, MESSAGES_NAME.groupIsAlreadyInUse));
  }

  const newGroup = await GroupModel.Group.create({
    userId: user._id,
    ...req.body,
  });

  res.status(200).json({ newGroup });
};

module.exports = {
  add,
};
