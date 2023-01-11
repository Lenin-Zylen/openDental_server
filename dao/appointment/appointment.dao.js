const db = require("../../helpers/db");
const appointment = db.Appointment;

async function createappointmentDao(appointmentdata) {
    const newrecord = new appointment(appointmentdata);
    console.log(newrecord)
    await newrecord.save();
}

async function getAllappointment() {
    return await appointment.find();
}

async function updateAppointmentById(id, appointmentParam) {
    let newAppointment = await appointment.findById({ _id: id })
    Object.assign(newAppointment, appointmentParam);
    await newAppointment.save();
}

async function deleteAppointById(id) {
    await appointment.delete({ _id: id }).exec();
}

module.exports = {
    createappointmentDao,
    getAllappointment,
    updateAppointmentById,
    deleteAppointById
};