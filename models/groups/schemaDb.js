const { Schema, model } = require("mongoose");

const { handleMongooseError } = require("../../helpers");
const { MESSAGES_NAME } = require("../../constants");

const groupSchema = new Schema(
  {
    userId: {
      type: String,
      require: [true, MESSAGES_NAME.userIsRequired],
    },
    parentId: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      requires: [true, MESSAGES_NAME.nameIsRequired],
    },
    fullName: {
      type: String,
      default: "",
    },
  },
  { versionKey: false, timestamps: true }
);

groupSchema.post("save", handleMongooseError);

const Group = model("group", groupSchema);

module.exports = {
  Group,
};
