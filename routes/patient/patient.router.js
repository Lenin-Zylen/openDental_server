
const express = require("express");
const router = express.Router();

const patientController = require("../../controller/patient/patient.controller");

//routes
router.post("/create",patientController.createPatient );
router.get("/get", patientController.getAllPatient);
router.get("/:id", patientController.getPatientbyId);
router.put("/:id",patientController.update);
// router.delete("/:id", userController.delete);

module.exports = router;