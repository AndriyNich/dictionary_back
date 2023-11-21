const Joi = require("joi");
const { MESSAGES_NAME } = require("../../constants");

const baseSchema = Joi.object({
  parentId: Joi.string().empty(""),
  name: Joi.string().min(3).max(50).required().messages({
    "any.required": MESSAGES_NAME.nameIsRequired,
  }),
  fullName: Joi.string().empty(""),
});

const updateSchema = Joi.object({
  _id: Joi.string()
    .required()
    .messages({ "any.required": MESSAGES_NAME.idIsRequired }),
});

module.exports = {
  baseSchema,
  addSchema: baseSchema,
  updateSchema: baseSchema.concat(updateSchema),
};
