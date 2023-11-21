const express = require("express");

const ctrl = require("../../controllers/auth");

const { UserModel } = require("../../models");

const { validateBody, authenticate } = require("../../middlewares");

const router = express.Router();

router.post("/register", validateBody(UserModel.registerSchema), ctrl.register);

router.post("/login", validateBody(UserModel.loginSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.post("/logout", authenticate, ctrl.logout);

router.patch(
  "/password",
  authenticate,
  validateBody(UserModel.changePasswordSchema),
  ctrl.changePassword
);

router.patch(
  "/",
  authenticate,
  validateBody(UserModel.updateSchema),
  ctrl.updateUser
);

module.exports = {
  authRouter: router,
};
