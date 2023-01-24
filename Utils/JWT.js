const { StatusCodes } = require("http-status-codes");
const { createJWToken } = require("../../eCommerce API/utils");

const attachCookiesToResponse = ({ res, tokenPayload }) => {
  const token = createJWToken({ tokenPayload });
  const oneDay = 1000 * 60 * 60 * 24;

  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    secure: process.env.NODE_ENV === "production",
    signed: true,
  });

  res.status(StatusCodes.OK).json({ tokenTest: token });
};
module.exports = { attachCookiesToResponse };
