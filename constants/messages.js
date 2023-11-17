const LANG = {
  en: "en",
  ua: "ua",
};

const MESSAGES_NAME = {
  emailIsAlreadyInUse: "emailIsAlreadyInUse",
  emailOrPasswordIsWrong: "loginInvalid",
  logoutSuccess: "logoutSuccess",
  changePasswordSuccess: "changePasswordSuccess",
  httpError_401: "httpError_401",
};

const messages = {
  [LANG.en]: {
    [MESSAGES_NAME.emailIsAlreadyInUse]: "Email is already in use",
    [MESSAGES_NAME.emailOrPasswordIsWrong]: "Email or password is wrong",
    [MESSAGES_NAME.logoutSuccess]: "Logout success",
    [MESSAGES_NAME.changePasswordSuccess]: "Password changed successfully",
    [MESSAGES_NAME.httpError_401]: "Unauthorized",
  },
  [LANG.ua]: {
    [MESSAGES_NAME.emailIsAlreadyInUse]: "Email вже використовується ",
    [MESSAGES_NAME.emailOrPasswordIsWrong]: "Email або пароль вказані невірно",
    [MESSAGES_NAME.logoutSuccess]: "Вихід відбувся успішно",
    [MESSAGES_NAME.changePasswordSuccess]: "Пароль успішно змінено",
    [MESSAGES_NAME.httpError_401]: "Неавторизовано",
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
