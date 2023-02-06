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
// productMobileSchema.statics.selectDistinctDataInSchema = async function () {
//obtained from mongodB Atlas
//find match with current product
//group by specific rating and get average rating of that prod
//find count or number of reviews of that prod
//   const data = { a: "$productSubType", b: "$PRICE" };
//   const result = await this.aggregate([
//     {
//       $group: {
//         _id: data,
//         // count: { $sum: 1 },
//       },
//     },
//     { $group: { _id: 0, uniqueFields: { $push: "$_id" } } },
//     // { $project: { _id: 0, uniqueFields: 1 } },
//   ]);
//   try {
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };

// productMobileSchema.pre("save", async function () {
//   await this.constructor.selectDistinctDataInSchema();
// });
// userSchema.pre("save", async function () {
//   //this.isModified Shows field  that are modified through user.save()
//   if (!this.isModified("password")) return;
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
// });

// userSchema.methods.comparePassword = async function (candidatePassword) {
//   const isMatch = await bcrypt.compare(candidatePassword, this.password);
//   return isMatch;
// };

// userSchema.methods.verifyJWT = async function (tokenPayload) {
//   const token = isTokenValid({ tokenPayload });
//   return token;
// };

productMobileSchema.statics.selectDistinctDataInSchema = async function (
  schemaValue
) {
  // const data = {
  //   // productSubType: "$productSubType",
  //   schemaValue: `$${schemaValue}`,
  //   // PRICE: "$PRICE",
  // };
  // let data = {};
  // data[schemaValue] = `$${schemaValue}`;
  const result = await this.aggregate([
    {
      $group: {
        _id: schemaValue,
      },
    },
    {
      $group: {
        _id: null,
        uniqueFields: { $push: "$_id" },
        count: { $sum: 1 },
      },
    },
    { $project: { _id: 0, uniqueFields: 1, count: 1 } },
  ]);

  return result;
};

module.exports = mongoose.model("productMobile", productMobileSchema);
