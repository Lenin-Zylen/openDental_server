const orderitemdao = require("../../dao/orderitem/orderitem.dao");


function createorderService(data){
    // console.log('service',patientData)

    return orderitemdao.createorderDao(data);
}

function getAllorder(){
    return orderitemdao.getAllOrder();
}


module.exports = {
    createorderService,
    getAllorder,
  };