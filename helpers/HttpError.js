const errorMessageList = require("../constants");

const HttpError = (status, message = errorMessageList[status]) => {
  let err = new Error(message);
  err.status = status;
  return err;
};

module.exports = {
  HttpError,
};
