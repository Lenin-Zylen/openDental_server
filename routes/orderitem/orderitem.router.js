
const express = require("express");
const router = express.Router();

const orderController = require("../../controller/orderitem/orderitem.controller");

//routes
router.post("/create",orderController.createorder );
router.get("/get", orderController.getAllorder);

module.exports = router;