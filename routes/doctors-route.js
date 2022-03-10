const express = require("express");
const router = express.Router();
const { DoctorModel } = require("../database-models/doctor");

router.get("/get-initialising-page/:dataLimit", async (req, res) => {
  const { dataLimit } = req.params;

  const allDoctors = await DoctorModel.find({});
  const doctors = await DoctorModel.find({}).limit(dataLimit);

  const totalDoctorsCount = allDoctors.length;
  const totalPagesToBeRendered = Math.ceil(totalDoctorsCount / dataLimit);

  res.status(200).send({ data: doctors, totalPagesToBeRendered: totalPagesToBeRendered });
});

router.get("/get-next-page/:dataLimit/:skipAmount", async (req, res) => {
  const { dataLimit, skipAmount } = req.params;

  const doctors = await DoctorModel.find({}).skip(skipAmount).limit(dataLimit);

  res.status(200).send({ data: doctors });
});

module.exports = router;
