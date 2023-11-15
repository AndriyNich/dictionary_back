const bcrypt = require("bcrypt");

const { User } = require("../../models/users");
const { HttpError, createWebTokenByUserId } = require("../../helpers");
const { getMsgByLang, MESSAGES_NAME } = require("../../constants");

const register = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user) {
    throw HttpError(409, getMsgByLang(req, MESSAGES_NAME.emailAlreadyInUse));
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({
    ...req.body,
    password: hashPassword,
  });

  console.log(newUser);

  const token = createWebTokenByUserId(newUser._id);
  await User.findByIdAndUpdate(newUser._id, { token });

  res.status(201).json({
    token,
    user: {
      name: newUser.name,
      email: newUser.email,
    },
  });
};

module.exports = {
  register,
};
