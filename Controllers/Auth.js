const User = require("../Models/User");
const CustomError = require("../errors");
const { attachCookiesToResponse } = require("../Utils");

const register = async (req, res) => {
  const { name, email } = req.body;
  const emailAlreadyExists = await User.findOne({ email });

  if (emailAlreadyExists)
    throw new CustomError.BadRequestError("Email Already Exists");

  const user = await User.create(req.body);

  const tokenPayload = createTokenUser(user);

  attachCookiesToResponse({ res, tokenPayload });
};
module.exports = { register };
