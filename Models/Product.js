const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const {
  createJWToken,
  verifyJWToken,
  isTokenValid,
} = require("../utils/index");

const productMobileSchema = new mongoose.Schema({
  PRICE: {
    type: String,
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

module.exports = mongoose.model("productMobile", productMobileSchema);
