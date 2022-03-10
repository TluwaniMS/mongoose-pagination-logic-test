const { model, Schema } = require("mongoose");

const DoctorSchema = new Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  gender: { type: String, required: true },
  specialty: { type: String, required: true },
  email: { type: String, required: true }
});

const DoctorModel = model("Doctor", DoctorSchema);

module.exports = { DoctorModel };
