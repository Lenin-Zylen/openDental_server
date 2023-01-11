var express = require('express');
var router = express.Router();
var usersRouter = require("./user/user.router");
var patientRouter = require("./patient/patient.router");
var departmentRouter = require("./department/department.router");
var orderRouter = require("./orderitem/orderitem.router");
let appointmentRouter = require("./appointment/appointment.router");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// other routes
router.use("/users", usersRouter);
router.use("/patient", patientRouter);
router.use("/department", departmentRouter);
router.use("/order", orderRouter);
router.use("/appointment", appointmentRouter);

module.exports = router;
