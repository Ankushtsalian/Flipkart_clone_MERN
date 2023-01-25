const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");

/**-----------------------------------------------------createJWT--------------------------------------------------------- */

const createJWT = ({ payload }) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET);
  return token;
};

/**-----------------------------------------------------isTokenValid--------------------------------------------------------- */

const isTokenValid = (token) => jwt.verify(token, process.env.JWT_SECRET);

/**------------------------------------------------------attachCookiesToResponse-------------------------------------------------------- */

const attachCookiesToResponse = ({ res, tokenPayload, refreshToken }) => {
  //Short term
  const accessTokenJWT = createJWT({ payload: { tokenPayload } });

  //long term
  const refreshTokenJWT = createJWT({
    payload: { tokenPayload, refreshToken },
  });

  const oneDay = 1000 * 60 * 60 * 24;
  const longerExp = 1000 * 60 * 60 * 24 * 30;

  res.cookie("accessToken", accessTokenJWT, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    signed: true,
    expires: new Date(Date.now() + oneDay),
  });

  res.cookie("refreshToken", refreshTokenJWT, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    signed: true,
    expires: new Date(Date.now() + longerExp),
  });

  res.status(StatusCodes.OK).json({
    accessTokenJWT,
    refreshTokenJWT,
  });
};

/**------------------------------REFER---------------------------------- */
// const attachSingleCookieToResponse = ({ res, tokenPayload }) => {
//   const token = createJWT({ payload: tokenPayload });

//   const oneDay = 1000 * 60 * 60 * 24;

//   res.cookie('token', token, {
//     httpOnly: true,
//     expires: new Date(Date.now() + oneDay),
//     secure: process.env.NODE_ENV === 'production',
//     signed: true,
//   });
// };

module.exports = { attachCookiesToResponse, createJWT, isTokenValid };
