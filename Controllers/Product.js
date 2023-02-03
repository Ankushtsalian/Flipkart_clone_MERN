const Product = require("../Models/Product");
const CustomError = require("../errors");
const { StatusCodes } = require("http-status-codes");

const createProduct = async (req, res) => {
  const { productType } = req.params;
  const product = await Product.create(req.body);
  res.status(StatusCodes.OK).json({
    product,
    productType,
  });
};

module.exports = { createProduct };
