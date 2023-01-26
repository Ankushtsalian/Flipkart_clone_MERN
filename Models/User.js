const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const {
  createJWToken,
  verifyJWToken,
  isTokenValid,
} = require("../utils/index");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Provide name"],
    minlenth: 3,
    maxlength: 50,
  },
  email: {
    type: String,
    required: [true, "Please Provide email"],
    validate: {
      validator: validator.isEmail,
      message: "Please provide valid email",
    },
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please Provide password"],
    minlenth: 6,
    maxlength: 70,
  },
  role: {
    type: String,
    enum: ["Admin", "User"],
    default: "User",
  },
  verificationToken: String,
  isVerified: {
    type: Boolean,
    default: false,
  },
  verified: Date,
  passwordToken: {
    type: String,
  },
  passwordTokenExpirationDate: {
    type: Date,
  },
});

userSchema.pre("save", async function () {
  //this.isModified Shows field  that are modified through user.save()
  if (!this.isModified("password")) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};

userSchema.methods.verifyJWT = async function (tokenPayload) {
  const token = isTokenValid({ tokenPayload });
  return token;
};

module.exports = mongoose.model("User", userSchema);
