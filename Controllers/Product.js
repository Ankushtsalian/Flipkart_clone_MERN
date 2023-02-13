const ProductMobile = require("../Models/ProductMobile");
const path = require("path");
const CustomAPIError = require("../errors/custom-api");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");
const { StatusCodes } = require("http-status-codes");
const distinctProducts = require("../Utils/groupDistinctDocs");
const { schemaLayout } = require("../Utils/schemaLayouts");
// const productMobileInstance = new ProductMobile();

const createProduct = async (req, res) => {
  const { productType } = req.params;
  if (productType === "mobile" || productType === "Mobile")
    await ProductMobile.create(req.body);

  res.status(StatusCodes.CREATED).json({ msg: "product created" });
};

const getProduct = async (req, res) => {
  const { productType } = req.params;
  // const { filterQueryValue } = req.body;
  let { filterQueryValue } = req.query;
  console.log(filterQueryValue);
  let product = [];

  if (productType === "mobile" || productType === "Mobile") {
    let schema = [];

    ProductMobile.schema.eachPath(function (path) {
      if (schemaLayout.includes(path)) schema.push(path);
    });

    // const filterQueryValue = {
    //   productSubType: ["LG", "realme"],
    //   PRICE: [15999, 12999],
    // };

    const distinctSchemaObjects = await distinctProducts(schema);
    const testFilter = await ProductMobile.selectDistinctDataInSchema(
      filterQueryValue
    );
    // console.log(req.query);
    product = await ProductMobile.find();

    // console.log(testFilter);
    res.status(StatusCodes.OK).json(testFilter);
    // res.status(StatusCodes.OK).json({ distinctSchemaObjects, product });
  }
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
