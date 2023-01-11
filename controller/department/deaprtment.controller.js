const departmentService = require("../../services/department/department.service");

function createdepartment(req,res,next){
    // console.log('controller',req)
    departmentService.createDepartmentService(req.body).then((data) =>
    res.json({
        records: data,
        message: `Data Registered successfully`,
    })) .catch((error) => next(error));

}

function getAlldepartment(req,res,next){
    departmentService.getAlldepartment().then((data)=>{
        res.json(data)
    }).catch((err) => next(err));
}




module.exports = {
    createdepartment,
    getAlldepartment,
};