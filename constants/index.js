const { emailRegexp } = require("./regexp");
const { errorMessageList } = require("./errorMessageList");
const { LANG, MESSAGES_NAME, getMsgByLang } = require("./messages");
const { PER_PAGE } = require("./pagination");

module.exports = {
  emailRegexp,
  errorMessageList,
  LANG,
  MESSAGES_NAME,
  getMsgByLang,
  PER_PAGE,
};
