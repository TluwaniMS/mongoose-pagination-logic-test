const { connect } = require("mongoose");

const dataBaseURL = process.env.MONGO_URL || "mongodb://localhost:27017/excel_data_directory";
const connectionOptions = { useNewUrlParser: true, useUnifiedTopology: true };

async function connectToDataBase() {
  connect(dataBaseURL, connectionOptions)
    .then(() => {
      console.log(`connection to database succesfully created :)!!!`);
    })
    .catch((error) => {
      console.log(`something went wrong ${error.message}`);
    });
}

module.exports = { connectToDataBase };
