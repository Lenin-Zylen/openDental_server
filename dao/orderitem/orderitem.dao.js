const db = require("../../helpers/db");
const orderitem = db.Item;

async function createorderDao(orderdata) {
    console.log('dao',orderdata)
    

    const newrecord = new orderitem(orderdata);
    console.log(newrecord)
     await newrecord.save();
}

async function getAllOrder() {
    return await orderitem.find();
}


module.exports = {
    createorderDao,
    getAllOrder,
  };