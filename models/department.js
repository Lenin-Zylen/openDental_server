const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  name:{ type: String, required: true },
  
  technician:{type:String},
});

schema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

module.exports = mongoose.model("Department", schema);
