const express = require("express");
const router = express.Router();
const Role = require("../../helpers/role");
const jwt = require("../../helpers/jwt");
const userController = require("../../controller/user/user.controller");

//routes
router.post("/authenticate", userController.authenticate);
router.post("/register", userController.register);
router.get("/", jwt(Role.Admin), userController.getAll);
router.get("/current", jwt(), userController.getCurrent);
router.get("/:id", userController.getById);
router.put("/:id",jwt(), userController. update);
router.delete("/:id", jwt(), userController.delete);

module.exports = router;