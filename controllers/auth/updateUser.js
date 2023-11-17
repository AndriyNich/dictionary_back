const { User } = require("../../models/users");
const { MESSAGES_NAME, getMsgByLang } = require("../../constants");
const { HttpError } = require("../../helpers");

const updateUser = async (req, res) => {
  const { user } = req;

  let updateUser = Object.assign(user, req.body);

  if (user?.email) {
    const oterUserWithNewEmail = await User.fineOne({
      email: user.email,
      _id: { $ne: user._id },
    });
    if (otherUserWithNewEmail) {
      throw HttpError(
        409,
        getMsgByLang(req, MESSAGES_NAME.emailIsAlreadyInUse)
      );
    }
  }

  await User.findByIdAndUpdate(user._id, updateUser);

  res.status(200).json({
    user: {
      name: updateUser.name,
      email: updateUser.email,
      phone: updateUser.phone,
    },
  });
};

module.exports = {
  updateUser,
};
