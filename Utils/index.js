const createTokenUser = require("./createTokenUser");
const { attachCookiesToResponse } = require("./JWT");
const sendEmail = require("./sendEmail");

module.exports = {
  attachCookiesToResponse,
  createTokenUser,
  sendEmail,
};
