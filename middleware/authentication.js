const CustomError = require("../errors");
const Token = require("../Models/Token");
const { attachCookiesToResponse, isTokenValid } = require("../utils");
const authenticateUser = async (req, res, next) => {
  const { refreshToken, accessToken } = req.signedCookies;

  try {
    /**
     * if you have access token then refresh token will be present but not V/V
     *  no need of re-creation just send back that verified token
     */
    if (accessToken) {
      const payload = isTokenValid(accessToken);
      req.user = payload.tokenPayload;
      return next();
    }

    //USEFULL when there are no access token generally when access token expired or only refresh token is present in UI

    const payload = isTokenValid(refreshToken);

    const existingToken = await Token.findOne({
      user: payload.tokenPayload.userId,
      refreshToken: payload.refreshToken,
    });

    if (!existingToken || !existingToken?.isValid) {
      throw new CustomError.UnauthenticatedError("Authentication Invalid");
    }

    attachCookiesToResponse({
      res,
      tokenPayload: payload.tokenPayload,
      refreshToken: existingToken.refreshToken,
    });

    req.user = payload.tokenPayload;

    next();
  } catch (error) {
    throw new CustomError.UnauthenticatedError("Authentication Invalid");
  }
};

const authorizePermissions = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new CustomError.UnauthorizedError(
        "Unauthorized to access this route"
      );
    }
    next();
  };
};

module.exports = {
  authenticateUser,
  authorizePermissions,
};
