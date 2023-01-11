const orderservice = require("../../services/orderitem/orderite.service");

function createorder(req,res,next){
    // console.log('controller',req)
    orderservice.createorderService(req.body).then((data) =>
    res.json({
        records: data,
        message: `Data Registered successfully`,
    })) .catch((error) => next(error));

}

function getAllorder(req,res,next){
    orderservice.getAllOrder().then((data)=>{
        res.json(data)
    }).catch((err) => next(err));
}




module.exports = {
    createorder,
    getAllorder,
};