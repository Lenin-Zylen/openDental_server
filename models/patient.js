const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const db = require("../helpers/db");
// const Item = db.Item;

const schema = new Schema({
  name:{ type: String, required: true },
  mobilenumber:{type: Number, required:true},
  description:{ type: String, required: true },
  enteredBy:{ type: String },
  enteredAt:{type: Date},
  createdDate: { type: Date, default: Date.now },
  createdBy:{type:Date,default: Date.now},
  modifiedBy:{type:Date},
  modifiedAt:{type:Date},
  test: {type: Schema.Types.ObjectId, ref: 'Item'}
});

schema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

module.exports = mongoose.model("Patient", schema);
