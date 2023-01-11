const patientServices = require("../../services/patient/patient.service");

function createPatient(req,res,next){
    // console.log('controller',req)
    patientServices.createPatientService(req.body).then((patient) =>
    res.json({
        patient: patient,
        message: `Patient Registered successfully`,
    })) .catch((error) => next(error));

}

function getAllPatient(req,res,next){
    patientServices.getAllPatient().then((patient)=>{
        res.json(patient)
    }).catch((err) => next(err));
}

function getPatientbyId(req,res,next){
    patientServices.getPatientbyId(req.params.id).then((patient) =>{
        if (!patient) {
            res.status(404).json({ message: "Patient Not Found!" });
            next();
        }
    }).catch((err) =>next(err));
}

function update(req, res, next) {
    req.body.modifiedAt=new Date();
    
    patientServices
        .update(req.params.id, req.body)
        .then(() =>
            res.json({
                message: `Patient with id: ${req.params.id} updated successfully.`,
            })
        )
        .catch((error) => next(error));
}


module.exports = {
    createPatient,
    getAllPatient,
    getPatientbyId,update
};