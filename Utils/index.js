const createTokenUser = require("./createTokenUser");
const { attachCookiesToResponse, isTokenValid, createJWT } = require("./JWT");
const sendEmail = require("./sendEmail");
const sendResetPassswordEmail = require("./sendResetPasswordEmail");
const sendVerificationEmail = require("./sendVerficationEmail");
const createHash = require("./createHash");

module.exports = {
  attachCookiesToResponse,
  createJWT,
  isTokenValid,
  createTokenUser,
  sendEmail,
  sendVerificationEmail,
  sendResetPassswordEmail,
  createHash,
};
