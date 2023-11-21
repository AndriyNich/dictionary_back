const { getMsgByLang } = require("../constants");
const { HttpError } = require("../helpers");

const validateBody = (schema, err = {}) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      let { status = 400, msg = error.message } = err;

      const msgLang = getMsgByLang(req, msg);
      if (msgLang) {
        msg = msgLang;
      }

      next(HttpError(status, msg));
    }
    next();
  };

  return func;
};

module.exports = {
  validateBody,
};
