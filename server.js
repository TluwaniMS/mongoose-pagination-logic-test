const { app } = require("./app");
const { connectToDataBase } = require("./database-config");
const { Doctors } = require("./sample-data/doctors-sample-data");
const { getAllDoctors, createDoctors } = require("./database-queries/doctors-data-base-queries");

const PORT = process.env.PORT | 5000;

app.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`);
});

(async () => {
  await connectToDataBase();
  const doctors = await getAllDoctors();

  doctors.length === 0
    ? (await createDoctors(Doctors), console.log(`database has been populated successfully`))
    : console.log(`database has already been populated.`);
})();
