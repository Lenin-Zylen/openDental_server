
const express = require("express");
const router = express.Router();

const departmentController = require("../../controller/department/deaprtment.controller");

//routes
router.post("/create",departmentController.createdepartment );
router.get("/get", departmentController.getAlldepartment);

module.exports = router;