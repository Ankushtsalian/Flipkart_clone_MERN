const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const {
  createJWToken,
  verifyJWToken,
  isTokenValid,
} = require("../utils/index");

const productMobileSchema = new mongoose.Schema({
  productType: {
    type: String,
  },
  productSubType: {
    type: String,
  },
  PRICE: {
    type: Number,
  },
  BRAND: {
    type: String,
  },
  COLOR: {
    type: String,
  },
  RAM: {
    type: String,
  },
  INTERNAL_STORAGE: {
    type: String,
  },
  THEME: {
    type: String,
  },
  POPULAR_COLLECTIONS: {
    type: String,
  },
  GST_INVOICE_AVAILABLE: {
    type: String,
  },
  BATTERY_CAPACITY: {
    type: String,
  },
  SCREEN_SIZE: {
    type: String,
  },
  PRIMARY_CAMERA: {
    type: String,
  },
  SECONDARY_CAMERA: {
    type: String,
  },
  productImage: {
    type: String,
    default: "TEST IMAGE",
  },
  productDescription: {
    type: String,
  },
  productAbsolutePrice: {
    type: String,
  },
  productMaxPrice: {
    type: String,
  },
  productDiscount: {
    type: String,
  },
  isFlipkartAssuredProduct: {
    type: Boolean,
    required: [true, "Please Provide password"],
    default: false,
  },
  isFreeDeliveryEligible: {
    type: Boolean,
    required: [true, "Please Provide password"],
    default: false,
  },
  isBankOfferEligible: {
    type: Boolean,
    required: [true, "Please Provide password"],
    default: false,
  },
  public_id: {
    type: String,
  },
});

// productMobileSchema.statics.selectDistinctDataInSchema = async function (
//   schemaValue
// ) {

//   const result = await this.aggregate([
//     {
//       $group: {
//         _id: schemaValue,
//       },
//     },
//     {
//       $group: {
//         _id: null,
//         uniqueFields: { $push: "$_id" },
//         count: { $sum: 1 },
//       },
//     },
//     { $project: { _id: 0, uniqueFields: 1, count: 1 } },
//   ]);

//   return result;
// };

productMobileSchema.statics.selectDistinctDataInSchema = async function (
  filterValue
) {
  const result = await this.aggregate([
    {
      $match: {
        productSubType: {
          $in: ["LG", "realme"],
        },
        PRICE: {
          $in: [15999, 12999],
        },
      },
    },
  ]);
  return result;
};

module.exports = mongoose.model("productMobile", productMobileSchema);
