const createTokenUser = require("./createTokenUser");
const { attachCookiesToResponse } = require("./JWT");
const sendEmail = require("./sendEmail");
const sendVerificationEmail = require("./sendVerficationEmail");

module.exports = {
  attachCookiesToResponse,
  createTokenUser,
  sendEmail,
  sendVerificationEmail,
};
