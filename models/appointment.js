const mongoose = require('mongoose');
const { schema } = require('./patient');
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
    patientuid: { type: Schema.ObjectId, ref: 'patient' },
    start: { type: Date, required: true },
    end: { type: Date, required: true },
    description: { type: String }
});

schema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

module.exports = mongoose.model("Appointment", appointmentSchema);

