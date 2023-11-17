const bcrypt = require("bcrypt");

const { User } = require("../../models/users");
const { getMsgByLang, MESSAGES_NAME } = require("../../constants");

const changePassword = async (req, res) => {
  const { password } = req.body;
  const { _id } = req.user;

  const hashPassword = await bcrypt.hash(password, 10);

  await User.findOneAndUpdate(_id, { password: hashPassword });

  res.status(200).json({
    message: getMsgByLang(req, MESSAGES_NAME.changePasswordSuccess),
  });
};

module.exports = {
  changePassword,
};
