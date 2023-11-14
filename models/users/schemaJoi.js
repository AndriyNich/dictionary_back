const Joi = require("joi");

const { emailRegexp } = require("../../constants");

const registerSchema = Joi.object({
  name: Joi.string().min(2).max(16).required(),
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).max(32).required(),
});

const loginSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).max(32).required(),
});

const updateSchema = Joi.object({
  name: Joi.string().min(2).max(16).required(),
  email: Joi.string().pattern(emailRegexp).required(),
  phone: Joi.string().empty(""),
});

const changePasswordSchema = Joi.object({
  password: Joi.string().min(6).max(32).required(),
});

module.exports = {
  registerSchema,
  loginSchema,
  updateSchema,
  changePasswordSchema,
};
