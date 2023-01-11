const db = require("../../helpers/db");
const department = db.Department;

async function createdpartmentDao(departmentdata) {
    console.log('dao',departmentdata)
    

    const newrecord = new department(departmentdata);
    console.log(newrecord)
     await newrecord.save();
}

async function getAlldepartment() {
    return await department.find();
}


module.exports = {
    createdpartmentDao,
    getAlldepartment,
  };