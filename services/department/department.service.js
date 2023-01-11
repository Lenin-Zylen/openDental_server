const departmentDao = require("../../dao/department/department.dao");


function createDepartmentService(deaprtmentdata){
    // console.log('service',patientData)

    return departmentDao.createdpartmentDao(deaprtmentdata);
}

function getAlldepartment(){
    return departmentDao.getAlldepartment();
}


module.exports = {
    createDepartmentService,
    getAlldepartment,
  };