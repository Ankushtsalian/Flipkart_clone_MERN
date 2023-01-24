require("dotenv").config();
const express = require("express");
const { register } = require("./Controllers/Auth");
const connectDB = require("./db/connect");
const app = express();

const port = process.env.PORT || 5000;

app.get("/", register);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
