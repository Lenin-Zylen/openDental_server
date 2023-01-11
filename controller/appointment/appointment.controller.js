const appointment = require("../../models/appointment");
const appointmentServices = require("../../services/appointment/appointment.service");

function createAppointment(req, res, next) {
    // console.log('controller',req)
    appointmentServices.createAppointmentService(req.body).then((appointment) =>
        res.json({
            appointment: appointment,
            message: `Appointment Registered successfully`,
        })).catch((error) => next(error));

}

function getAllAppointment(req, res, next) {
    appointmentServices.getAllAppointment().then((appointment) => {
        res.json(appointment)
    }).catch((err) => next(err));
}

function getAppointmentbyId(req, res, next) {
    appointmentServices.getappointmentbyId(req.params.id).then((appointment) => {
        if (!appointment) {
            res.status(404).json({ message: "Appointment Not Found!" });
            next();
        }
    }).catch((err) => next(err));
}

function update(req, res, next) {
    req.body.modifiedAt = new Date();

    appointmentServices
        .update(req.params.id, req.body)
        .then(() =>
            res.json({
                message: `Appointment with id: ${req.params.id} updated successfully.`,
            })
        )
        .catch((error) => next(error));
}

function deleteAppointment(req, res, next) {
    appointmentServices.deleteAppointment(req.params.id).then((appointment) => {
        res.json({
            message: `Appointment with id: ${req.params.id} deleted successfully.`,
        })
    })
        .catch((error) => next(error));
}


module.exports = {
    createAppointment,
    getAllAppointment,
    getAppointmentbyId,
    update,
    deleteAppointment
};