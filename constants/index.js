const { emailRegexp } = require("./regexp");
const { errorMessageList } = require("./errorMessageList");
const { LANG, MESSAGES_NAME, getMsgByLang } = require("./messages");

module.exports = {
  emailRegexp,
  errorMessageList,
  LANG,
  MESSAGES_NAME,
  getMsgByLang,
};
