const Joi = require("joi");

const getJoiObject = (obj) => Joi.object(obj);

module.exports = {
  getJoiObject,
};
