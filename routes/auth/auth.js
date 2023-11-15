const express = require("express");

const ctrl = require("../../controllers/auth");

const schema = require("../../models/users");

const { validateBody } = require("../../middlewares");

const router = express.Router();

router.post("/register", validateBody(schema.registerSchema), ctrl.register);

module.exports = {
  authRouter: router,
};
