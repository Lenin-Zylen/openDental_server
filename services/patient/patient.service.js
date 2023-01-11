const patientDao = require("../../dao/patient/patient.dao");


function createPatientService(patientData){
    // console.log('service',patientData)

    return patientDao.createPatientDao(patientData);
}

function getAllPatient(){
    return patientDao.getAllPatients();
}

function getPatientbyId(id){
    return patientDao.getPatientbyId(id);
}

function update(id, patientParam) {
    return patientDao.patientupdate(id, patientParam);
  }
module.exports = {
    createPatientService,
    getAllPatient,
    getPatientbyId,
    update
  };