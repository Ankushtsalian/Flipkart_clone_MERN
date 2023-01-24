const User = require("../Models/User");
const CustomError = require("../errors");
const { attachCookiesToResponse, createTokenUser } = require("../Utils");
const { StatusCodes } = require("http-status-codes");

const register = async (req, res) => {
  let { name, email, password, role } = req.body;
  const emailAlreadyExists = await User.findOne({ email });

  if (emailAlreadyExists)
    throw new CustomError.BadRequestError("Email Already Exist");

  // check if account is first in dB if so make role as ADMIN

  const isFirstAccount = (await User.countDocuments({})) === 0;
  role = isFirstAccount ? "Admin" : "User";

  const verificationToken = "FAKE TOKEN";

  const user = await User.create({
    name,
    email,
    password,
    verificationToken,
    role,
  });

  res.status(StatusCodes.OK).json({
    msg: "Success! Please check your email to verify account",
    verificationToken: user.verificationToken,
  });

  //send verificationToken only for testing purpose

  //   const tokenPayload = createTokenUser(user);

  //   attachCookiesToResponse({ res, tokenPayload });
};
module.exports = { register };
