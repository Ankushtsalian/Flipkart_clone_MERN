const createTokenUser = require("./createTokenUser");
const { attachCookiesToResponse } = require("./JWT");
createTokenUser;
module.exports = {
  attachCookiesToResponse,
  createTokenUser,
};
