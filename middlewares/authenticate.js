const jwt = require("jsonwebtoken");

const { User } = require("../models/users");
const { HttpError } = require("../helpers");
const { getMsgByLang, MESSAGES_NAME } = require("../constants");

const { SECRET_KEY } = process.env;

const error401 = (req) => {
  return HttpError(401, getMsgByLang(req, MESSAGES_NAME.httpError_401));
};

const authenticate = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return next(error401(req));
  }

  const [bearer, token] = authorization.split(" ");

  if (bearer !== "Bearer" || !token) {
    return next(error401(req));
  }

  try {
    const { id } = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(id);

    if (!user || !user.token || user.token !== token) {
      return next(error401(req));
    }

    req.user = user;
    next();
  } catch (error) {
    next(error401(req));
  }
};

module.exports = {
  authenticate,
};
