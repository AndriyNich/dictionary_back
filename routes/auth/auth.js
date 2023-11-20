const express = require("express");

const ctrl = require("../../controllers/auth");

const schema = require("../../models/users");

const { validateBody, authenticate } = require("../../middlewares");
const auth = require("../../controllers/auth");

const router = express.Router();

router.post("/register", validateBody(schema.registerSchema), ctrl.register);

router.post("/login", validateBody(schema.loginSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.post("/logout", authenticate, ctrl.logout);

router.patch(
  "/password",
  authenticate,
  validateBody(schema.changePasswordSchema),
  ctrl.changePassword
);

router.patch(
  "/",
  authenticate,
  validateBody(schema.updateSchema),
  ctrl.updateUser
);

module.exports = {
  authRouter: router,
};
