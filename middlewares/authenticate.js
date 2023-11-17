const jwt = require("jsonwebtoken");

const { User } = require("../models/users");
const { HttpError } = require("../helpers");
const { getMsgByLang, MESSAGES_NAME } = require("../constants");

const { SECRET_KEY } = process.env;

const error401 = (req) => {
  return HttpError(401, getMsgByLang(req, MESSAGES_NAME.httpError_401));
};

const authenticate = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const { bearer, token } = authorization.split(" ");

  try {
    if (bearer !== "Bearer" || !token) {
      throw error401(req);
    }
  } catch (error) {
    next(error401);
  }
};

module.exports = {
  authenticate,
};
