const { getMsgByLang, MESSAGES_NAME } = require("../../constants");
const { HttpError } = require("../../helpers");
const { GroupModel } = require("../../models");

const update = async (req, res) => {
  const { _id: userId } = req.user;
  const { _id, name } = req.body;

  const group = await GroupModel.Group.findOne({
    userId,
    name,
    _id: { $ne: _id },
  });
  if (group) {
    throw HttpError(409, getMsgByLang(req, MESSAGES_NAME.groupIsAlreadyInUse));
  }

  const newGroup = await GroupModel.Group.findByIdAndUpdate(_id, req.body);

  Object.assign(newGroup, req.body);

  res.status(200).json(newGroup);
};

module.exports = {
  update,
};
