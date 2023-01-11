const appointmentDao = require("../../dao/appointment/appointment.dao");


function createAppointmentService(appointmentdata) {
    // console.log('service',patientData)

    return appointmentDao.createappointmentDao(appointmentdata);
}

function getAllAppointment() {
    return appointmentDao.getAllappointment();
}

function getappointmentbyId(id) {
    return appointmentDao.getappointmentbyId(id);
}

function update(id, appointmentParam) {
    return appointmentDao.updateAppointmentById(id, appointmentParam);
}

function deleteAppointment(id) {
    return appointmentDao.deleteAppointById(id);
}

module.exports = {
    createAppointmentService,
    getAllAppointment,
    update,
    getappointmentbyId,
    deleteAppointment
};
