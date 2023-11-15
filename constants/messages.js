const LANG = {
  en: "en",
  ua: "ua",
};

const MESSAGES_NAME = {
  emailAlreadyInUse: "emailAlreadyInUse",
};

const messages = {
  [LANG.en]: {
    [MESSAGES_NAME.emailAlreadyInUse]: "Email already in use",
  },
  [LANG.ua]: {
    [MESSAGES_NAME.emailAlreadyInUse]: "Email вже використовується ",
  },
};

const getMsgByLang = (req, messageName) => {
  const { lang = LANG.en } = req.query;
  return messages[lang][messageName];
};

module.exports = {
  LANG,
  MESSAGES_NAME,
  getMsgByLang,
};
