const { User } = require("./schemaDb");
const {
  registerSchema,
  loginSchema,
  updateSchema,
  changePasswordSchema,
} = require("./schemaJoi");

module.exports = {
  User,
  registerSchema,
  loginSchema,
  updateSchema,
  changePasswordSchema,
};
