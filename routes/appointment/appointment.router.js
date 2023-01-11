
const express = require("express");
const router = express.Router();

const appointmentController = require("../../controller/appointment/appointment.controller");

//routes
router.post("/create",appointmentController.createAppointment );
router.get("/get", appointmentController.getAllAppointment);
router.get("/:id", appointmentController.getAppointmentbyId);
router.put("/:id",appointmentController.update);
router.delete("/:id", appointmentController.deleteAppointment);

module.exports = router;