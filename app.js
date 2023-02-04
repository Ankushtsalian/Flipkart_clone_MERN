require("./db/connect");
require("dotenv").config();
require("express-async-errors");

const fileUpload = require("express-fileupload");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,

  api_key: process.env.CLOUD_API_KEY,

  api_secret: process.env.CLOUD_API_SECRET,
});

const express = require("express");
const app = express();
const cors = require("cors");

app.use(
  cors({
    origin:
      process.env.NODE_ENV !== "production"
        ? "http://localhost:3000"
        : "https://e-commerce-node-qttl.onrender.com",
    credentials: true,
  })
);

const morgan = require("morgan");
const cookieParser = require("cookie-parser");

const connectDB = require("./db/connect");
const user = require("./Routers/User");
const Product = require("./Routers/Product");

const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.use(fileUpload({ useTempFiles: true }));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const port = process.env.PORT || 5000;

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("tiny"));
}

app.use(cookieParser(process.env.JWT_SECRET));
app.use("/", user);
app.use("/product", Product);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

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
