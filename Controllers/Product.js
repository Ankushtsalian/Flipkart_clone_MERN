const ProductMobile = require("../Models/ProductMobile");
const path = require("path");
const CustomAPIError = require("../errors/custom-api");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");
const { StatusCodes } = require("http-status-codes");
const productMobileInstance = new ProductMobile();
let distinctSchemaObjects = [];

const distinctProducts = async (schemaObjectArray, index) => {
  if (index === schemaObjectArray.length) {
    return distinctSchemaObjects;
  }
  const distinctProcuctResult = await ProductMobile.find().distinct(
    schemaObjectArray[index]
  );
  distinctSchemaObjects.push({
    [schemaObjectArray[index]]: distinctProcuctResult,
  });

  await distinctProducts(schemaObjectArray, index + 1);
};

const createProduct = async (req, res) => {
  const { productType } = req.params;
  if (productType === "mobile" || productType === "Mobile")
    await ProductMobile.create(req.body);

  res.status(StatusCodes.CREATED).json({ msg: "product created" });
};

const getProduct = async (req, res) => {
  const { productType } = req.params;
  let product = [];

  // let completedArray = [];
  /**--------------------USING STATICS INSTANCE NEEDS REFRACTOR------- */

  // const mapArray = async (array, index) => {
  //   if (index === array.length) return;
  //   val = {
  //     [array[index]]: `$${array[index]}`,
  //   };
  //   const result = await ProductMobile.selectDistinctDataInSchema(val);
  //   completedArray.push(...result);

  //   await mapArray(array, index + 1);
  // };
  /**--------------------USING STATICS INSTANCE NEEDS REFRACTOR------- */
  // let distinctSchemaObjects = [];
  if (productType === "mobile" || productType === "Mobile") {
    let schema = [];
    ProductMobile.schema.eachPath(function (path) {
      schema.push(path);
    });
    /**--------------------USING DISTINCT ARRAY METHOD NEEDS REFRACTOR------- */

    /**--------------------USING DISTINCT ARRAY METHOD NEEDS REFRACTOR------- */

    await distinctProducts(schema, 0);

    product = await ProductMobile.find();
  }
  res.status(StatusCodes.OK).json({ distinctSchemaObjects, product });
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
