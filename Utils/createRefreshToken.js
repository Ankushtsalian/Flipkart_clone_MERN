const Token = require("../Models/Token");
const crypto = require("crypto");
const { attachCookiesToResponse } = require("./JWT");
const { StatusCodes } = require("http-status-codes");

module.exports = createRefreshToken = async (req, res, tokenPayload, user) => {
  let refreshToken = "";

  // check for existing token

  const existingToken = await Token.findOne({ user: user._id });

  //if token exists in dB skip Re-creation of token

  if (existingToken) {
    const { isValid } = existingToken;
    if (!isValid) {
      throw new CustomError.UnauthenticatedError("Invalid Credentials");
    }
    refreshToken = existingToken.refreshToken;

    attachCookiesToResponse({ res, tokenPayload, refreshToken });

    res.status(StatusCodes.OK).json({ user: tokenPayload });

    return;
  }

  //else if no token exists in dB create new token

  refreshToken = crypto.randomBytes(40).toString("hex");
  const userAgent = req.headers["user-agent"];
  const ip = req.ip;
  const userToken = { refreshToken, ip, userAgent, user: user._id };

  await Token.create(userToken);

  attachCookiesToResponse({ res, tokenPayload, refreshToken });
  res.status(StatusCodes.OK).json({ user: tokenPayload });
};
