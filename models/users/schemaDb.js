const { Schema, model } = require("mongoose");

const { emailRegexp, MESSAGES_NAME } = require("../../constants");

const { handleMongooseError } = require("../../helpers");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, MESSAGES_NAME.nameIsRequired],
    },
    email: {
      type: String,
      match: emailRegexp,
      required: [true, MESSAGES_NAME.emailIsRequired],
      unique: true,
    },
    password: {
      type: String,
      required: [true, MESSAGES_NAME.passwordIsRequired],
    },
    phone: {
      type: String,
      default: "",
    },
    token: {
      type: String,
      default: "",
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleMongooseError);

const User = model("user", userSchema);

module.exports = {
  User,
};
