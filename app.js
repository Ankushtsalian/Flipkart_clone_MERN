require("dotenv").config();
const mongoose = require("mongoose");
require("./db/connect");

// mongoose.set("strictQuery", false);
const express = require("express");
const app = express();
const register = require("./Routers/User");
const connectDB = require("./db/connect");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

const port = process.env.PORT || 5000;
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("tiny"));
}
app.use(cookieParser(process.env.JWT_SECRET));
app.use("/", register);

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
