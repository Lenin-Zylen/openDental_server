const db = require("../../helpers/db");
const Patients = db.Patient;
// const Patients = db.patientdata;

async function createPatientDao(patientData) {
    const patientrecord = await Patients.findOne({ mobilenumber: patientData.mobilenumber });
    if (patientrecord) throw `This patient already exists: ${patientData.name}`;
    const newpatient = new Patients(patientData);
    await newpatient.save();
}

async function getAllPatients() {
    return await Patients.find().populate({ path: 'test', model: 'Item', populate: [{ path: 'department', model: 'Department' }] });
}

async function getPatientbyId(id) {
    const patient = await Patients.findById({ id });
}

async function patientupdate(id, patientParam) {
    console.log(id, patientParam);
    const patientdata = await Patients.findById(id);
    console.log(patientdata, patientParam);
    Object.assign(patientdata, patientParam);
    await patientdata.save();
}

module.exports = {
    createPatientDao,
    getAllPatients,
    getPatientbyId,
    patientupdate
};