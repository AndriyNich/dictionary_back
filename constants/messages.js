const LANG = {
  en: "en",
  ua: "ua",
};

const MESSAGES_NAME = {
  httpError_401: "httpError_401",

  idIsRequired: "idIsrequired",

  emailIsAlreadyInUse: "emailIsAlreadyInUse",
  emailOrPasswordIsWrong: "loginInvalid",
  logoutSuccess: "logoutSuccess",
  changePasswordSuccess: "changePasswordSuccess",

  nameIsRequired: "nameIsRequired",
  userIsRequired: "userIsRequired",
  emailIsRequired: "emailIsRequired",
  passwordIsRequired: "passwordIsRequired",

  groupIsAlreadyInUse: "groupIsAlreadyInUse",
};

const messages = {
  [LANG.en]: {
    [MESSAGES_NAME.httpError_401]: "Unauthorized",

    [MESSAGES_NAME.idIsRequired]: "_id is required",

    [MESSAGES_NAME.emailIsAlreadyInUse]: "Email is already in use",
    [MESSAGES_NAME.emailOrPasswordIsWrong]: "Email or password is wrong",
    [MESSAGES_NAME.logoutSuccess]: "Logout success",
    [MESSAGES_NAME.changePasswordSuccess]: "Password changed successfully",

    [MESSAGES_NAME.nameIsRequired]: "Name is required",
    [MESSAGES_NAME.userIsRequired]: "User is required",
    [MESSAGES_NAME.emailIsRequired]: "Email is required",
    [MESSAGES_NAME.passwordIsRequired]: "Set password for user",

    [MESSAGES_NAME.groupIsAlreadyInUse]: "Group is already in use",
  },
  [LANG.ua]: {
    [MESSAGES_NAME.httpError_401]: "Неавторизовано",

    [MESSAGES_NAME.idIsRequired]: "Не вказано ідентифікатор запису",

    [MESSAGES_NAME.emailIsAlreadyInUse]: "Email вже використовується ",
    [MESSAGES_NAME.emailOrPasswordIsWrong]: "Email або пароль вказані невірно",
    [MESSAGES_NAME.logoutSuccess]: "Вихід відбувся успішно",
    [MESSAGES_NAME.changePasswordSuccess]: "Пароль успішно змінено",

    [MESSAGES_NAME.nameIsRequired]: "Необхідно вказати назву",
    [MESSAGES_NAME.userIsRequired]: "Необхідно вказати користувача",
    [MESSAGES_NAME.emailIsRequired]: "Необхідно вказати email",
    [MESSAGES_NAME.passwordIsRequired]: "Вкажіть пароль для користувача",

    [MESSAGES_NAME.groupIsAlreadyInUse]: "Група з такою назвою вже існує",
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
