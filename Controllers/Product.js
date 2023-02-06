const ProductMobile = require("../Models/ProductMobile");
const path = require("path");
const CustomAPIError = require("../errors/custom-api");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");
const { StatusCodes } = require("http-status-codes");
const productsInstance = new ProductMobile();

const createProduct = async (req, res) => {
  const { productType } = req.params;
  if (productType === "mobile" || productType === "Mobile")
    await ProductMobile.create(req.body);

  res.status(StatusCodes.CREATED).json({ msg: "product created" });
};

const getProduct = async (req, res) => {
  const { productType } = req.params;
  let product = [];
  if (productType === "mobile" || productType === "Mobile")
    product = await ProductMobile.find();
  let schema = [];
  const result = ProductMobile.schema.eachPath(function (path) {
    schema.push(path);
  });

  let completedArray = [];
  const mapArray = async (array, index) => {
    if (index === array.length) return;
    val = {
      [array[index]]: `$${array[index]}`,
    };
    const result = await ProductMobile.selectDistinctDataInSchema(val);
    completedArray.push(...result);

    await mapArray(array, index + 1);
  };

  await mapArray(schema, 0);
  res.status(StatusCodes.OK).json(completedArray);
};

const uploadProductImageToCloud = async (req, res) => {
  const result = await cloudinary.uploader.upload(
    req.files.image.tempFilePath,
    {
      use_filename: true,
      folder: "Flipkart_Clone/Products",
    }
  );
  // await Profile.create({
  //   public_id: result.public_id,
  //   src: result.secure_url,
  //   createdBy: req.user.userId,
  //   createdByName: req.user.username,
  // });
  fs.unlinkSync(req.files.image.tempFilePath);

  res.status(200).json({
    image: { src: result.secure_url },
    public_id: result.public_id,
  });
};

module.exports = { createProduct, getProduct, uploadProductImageToCloud };
