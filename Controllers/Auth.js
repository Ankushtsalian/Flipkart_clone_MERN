const User = require("../Models/User");
const CustomError = require("../errors");
const {
  attachCookiesToResponse,
  createTokenUser,
  sendEmail,
  sendVerificationEmail,
} = require("../Utils");
const { StatusCodes } = require("http-status-codes");
const crypto = require("crypto");

/**---------------------------------------register--------------------------------------- */

const register = async (req, res) => {
  let { name, email, password, role } = req.body;
  const emailAlreadyExists = await User.findOne({ email });

  if (emailAlreadyExists)
    throw new CustomError.BadRequestError("Email Already Exist");

  // check if account is first in dB if so make role as ADMIN

  const isFirstAccount = (await User.countDocuments({})) === 0;
  role = isFirstAccount ? "Admin" : "User";

  const verificationToken = crypto.randomBytes(40).toString("hex");

  const user = await User.create({
    name,
    email,
    password,
    verificationToken,
    role,
  });

  const origin = "http://localhost:3000";
  // const newOrigin = 'https://react-node-user-workflow-front-end.netlify.app';

  //   const tempOrigin = req.get("origin");
  // const protocol = req.protocol;
  // const host = req.get('host');
  // const forwardedHost = req.get('x-forwarded-host');
  // const forwardedProtocol = req.get('x-forwarded-proto');

  await sendVerificationEmail({
    name: user.name,
    email: user.email,
    verificationToken: user.verificationToken,
    origin,
  });

  res.status(StatusCodes.OK).json({
    msg: "Success! Please check your email to verify account",
  });
};

/**---------------------------------------register--------------------------------------- */

/**---------------------------------------verifyEmail--------------------------------------- */

const verifyEmail = async (req, res) => {
  const { verificationToken, email } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    throw new CustomError.UnauthenticatedError("Verification Failed");
  }

  if (user.verificationToken !== verificationToken) {
    throw new CustomError.UnauthenticatedError("Verification Failed");
  }

  (user.isVerified = true), (user.verified = Date.now());
  user.verificationToken = "";

  await user.save();

  res.status(StatusCodes.OK).json({ msg: "Email Verified" });
};

/**---------------------------------------verifyEmail--------------------------------------- */

/**---------------------------------------login--------------------------------------- */

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    throw new CustomError.BadRequestError("Please Provide Email and Password");

  const user = await User.findOne({
    email,
  });

  if (!user) throw new CustomError.UnauthenticatedError("User doesn't Exists");

  const isPasswordValid = await user.comparePassword(password);

  if (!isPasswordValid)
    throw new CustomError.UnauthenticatedError("Please check your credentials");

  if (!user.isVerified)
    throw new CustomError.UnauthenticatedError("Please Verify your Email");

  const tokenPayload = createTokenUser(user);

  attachCookiesToResponse({ res, tokenPayload });
};

/**---------------------------------------login--------------------------------------- */

module.exports = { register, login, verifyEmail };
