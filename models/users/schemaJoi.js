const Joi = require("joi");

const { emailRegexp, MESSAGES_NAME } = require("../../constants");
const { getJoiObject } = require("../../helpers");

const name = Joi.string()
  .min(2)
  .max(16)
  .required()
  .messages({ "any.required": MESSAGES_NAME.nameIsRequired });

const email = Joi.string()
  .pattern(emailRegexp)
  .required()
  .messages({ "any.required": MESSAGES_NAME.emailIsRequired });

const password = Joi.string()
  .min(6)
  .max(32)
  .required()
  .messages({ "any.required": MESSAGES_NAME.passwordIsRequired });

const phone = Joi.string().empty("");

module.exports = {
  registerSchema: getJoiObject({ name, email, password }),
  loginSchema: getJoiObject({ email, password }),
  updateSchema: getJoiObject({ name, email, phone }),
  changePasswordSchema: getJoiObject({ password }),
};
