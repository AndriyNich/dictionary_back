const bcrypt = require("bcrypt");

const { User } = require("../../models/users");
const { HttpError, createWebTokenByUserId } = require("../../helpers");
const { MESSAGES_NAME, getMsgByLang } = require("../../constants");

const emailOrPassworIsWrong = (req) => {
  throw HttpError(401, getMsgByLang(req, MESSAGES_NAME.emailOrPasswordIsWrong));
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    emailOrPassworIsWrong();
  }

  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) {
    emailOrPassworIsWrong();
  }

  const token = createWebTokenByUserId(user._id);
  await User.findByIdAndUpdate(user._id, { token });

  res.json({
    token,
    user: {
      _id: user._id,
      name: user.name,
      email,
    },
  });
};

module.exports = {
  login,
};
