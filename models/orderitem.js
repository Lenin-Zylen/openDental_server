const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  itemname:{ type: String, required: true },
  department:{ type: Schema.Types.ObjectId, ref: 'Department' },
});

schema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

module.exports = mongoose.model("Item", schema);
