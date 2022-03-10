const { DoctorModel } = require("../database-models/doctor");

const createDoctors = async (doctors) => {
  await DoctorModel.insertMany(doctors);

  return `Operation completed successfully.`;
};

const getAllDoctors = async () => {
  const doctors = await DoctorModel.find({});

  return doctors;
};

module.exports = { getAllDoctors, createDoctors };
