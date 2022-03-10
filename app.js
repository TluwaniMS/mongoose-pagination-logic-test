const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const doctorsRoute = require("./routes/doctors-route");

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(morgan(":method :url :status :res[content-length] - :response-time ms"));
app.use("/api/doctors", doctorsRoute);

module.exports = {
  app
};
