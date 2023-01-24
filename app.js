require("./db/connect");
require("dotenv").config();

const express = require("express");
const app = express();

const morgan = require("morgan");
const cookieParser = require("cookie-parser");

const connectDB = require("./db/connect");
const user = require("./Routers/User");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const port = process.env.PORT || 5000;

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("tiny"));
}

app.use(cookieParser(process.env.JWT_SECRET));

app.use("/", user);

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
