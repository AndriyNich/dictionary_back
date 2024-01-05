const { User } = require("../../models/users");
const { MESSAGES_NAME, getMsgByLang } = require("../../constants");

const logout = async (req, res) => {
  const { _id } = req.user;

  await User.findByIdAndUpdate(_id, { token: "" });

  res
    .status(204)
    .json({ message: getMsgByLang(req, MESSAGES_NAME.logoutSuccess) });
};

module.exports = {
  logout,
};
