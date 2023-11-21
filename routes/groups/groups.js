const express = require("express");

const { groups } = require("../../controllers/");

const { GroupModel } = require("../../models");
const { authenticate, validateBody } = require("../../middlewares");

const router = express.Router();

router.post(
  "/add",
  authenticate,
  validateBody(GroupModel.addSchema),
  groups.add
);

router.get("/", authenticate, groups.getList);

router.patch(
  "/update",
  authenticate,
  validateBody(GroupModel.updateSchema),
  groups.update
);

module.exports = {
  groupRouter: router,
};
