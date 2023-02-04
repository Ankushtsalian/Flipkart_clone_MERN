const Product = require("../Models/Product");
const path = require("path");
const CustomAPIError = require("../errors/custom-api");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");
const { StatusCodes } = require("http-status-codes");

const createProduct = async (req, res) => {
  const { productType } = req.params;
  console.log(req.body);
  const product = await Product.create(req.body);

  res.status(StatusCodes.CREATED).json({ msg: "product created" });
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

module.exports = { createProduct, uploadProductImageToCloud };
