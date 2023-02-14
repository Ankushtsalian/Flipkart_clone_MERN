const ProductMobile = require("../Models/ProductMobile");
const path = require("path");
const CustomAPIError = require("../errors/custom-api");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");
const { StatusCodes } = require("http-status-codes");
const { createDistinctQuery } = require("../Utils/groupDistinctDocs");
const { schemaLayout } = require("../Utils/schemaLayouts");
// const productMobileInstance = new ProductMobile();

/**
 * Create a new product of a specific type.
 *
 * @param {Object} req - The incoming HTTP request object. Contains information such as URL, headers, and data associated with the request.
 * @param {Object} req.params - An object that contains the URL parameters from the incoming request.
 * @param {string} req.params.productType - The type of product being created.
 * @param {Object} req.body - The JSON object that contains the data to be stored in the new product.
 * @param {Object} res - The HTTP response object. Used to set the response status code and send data.
 *
 * @returns {Object} A message indicating that the product has been created.
 */

const createProduct = async (req, res) => {
  const { productType } = req.params;
  if (productType === "mobile" || productType === "Mobile")
    await ProductMobile.create(req.body);

  res.status(StatusCodes.CREATED).json({ msg: "product created" });
};

/**
 * Get product information for a specific product type.
 *
 * @param {Object} req - The incoming HTTP request object. Contains information such as URL, headers, and data associated with the request.
 * @param {Object} req.params - An object that contains the URL parameters from the incoming request.
 * @param {string} req.params.productType - The type of product being requested.
 * @param {Object} req.query - An object that contains query string parameters from the incoming request.
 * @param {Array.<Object>} arrayOfObjects req.query.filterQueryValue - The value to be used to filter the product data.
 * @param {Object} res - The HTTP response object. Used to set the response status code, send data, and set headers.
 *
 * @returns {Object} An object that contains the filtered product data and metadata.
 */

const getProduct = async (req, res) => {
  const { productType } = req.params;
  let { filterQueryValue } = req.query;

  let product = [];

  if (productType === "mobile" || productType === "Mobile") {
    const { distinctSchemaQuery, addToSetQuery } = createDistinctQuery();

    const testFilter = await ProductMobile.selectDistinctDataInSchema(
      filterQueryValue,
      distinctSchemaQuery,
      addToSetQuery
    );

    // const distinctSchemaObjects = await distinctProducts(schema);

    product = await ProductMobile.find();
    const { products, ...rest } = testFilter[0];
    res.status(StatusCodes.OK).json({ distinctSchemaObjects: rest, products });
    // res.status(StatusCodes.OK).json({ distinctSchemaObjects, product });
  }
};

/**
 * Upload a product image to the cloud storage.
 * @param {Object} req - The incoming HTTP request object. Contains information such as URL, headers, and data associated with the request.
 * @param {Object} req.files - An object that contains the uploaded files from the incoming request.
 * @param {Object} req.files.image - The uploaded image file object.
 * @param {string} req.files.image.tempFilePath - The temporary file path of the uploaded image.
 * @param {Object} res - The HTTP response object. Used to set the response status code and send data.
 * @returns {Object} An object containing the secure URL and public ID of the uploaded image.
 */

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
