const User = require("../Models/User");
const CustomError = require("../errors");
const { attachCookiesToResponse, createTokenUser } = require("../Utils");

const register = async (req, res) => {
  const { name, email } = req.body;
  const emailAlreadyExists = await User.findOne({ email });

  if (emailAlreadyExists)
    throw new CustomError.BadRequestError("Email Already Exists");

  // check if account is first in dB if so make role as ADMIN

  const isFirstAccount = (await User.countDocuments({})) === 0;
  req.body.role = isFirstAccount ? "Admin" : "User";

  const user = await User.create(req.body);

  const tokenPayload = createTokenUser(user);

  attachCookiesToResponse({ res, tokenPayload });
};
module.exports = { register };
