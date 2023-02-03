const Product = require("../Models/Product");
const CustomError = require("../errors");
const { StatusCodes } = require("http-status-codes");

const createProduct = async (req, res) => {
  const { productType } = req.params;

  const product = await Product.create(req.body.product);

  res.status(StatusCodes.CREATED).json({ msg: "product created" });
};

module.exports = { createProduct };
