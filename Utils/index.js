const createTokenUser = require("./createTokenUser");
const { attachCookiesToResponse, isTokenValid, createJWT } = require("./JWT");
const sendEmail = require("./sendEmail");
const sendVerificationEmail = require("./sendVerficationEmail");

module.exports = {
  attachCookiesToResponse,
  createJWT,
  isTokenValid,
  createTokenUser,
  sendEmail,
  sendVerificationEmail,
};
