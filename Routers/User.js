const express = require("express");
const {
  register,
  login,
  verifyEmail,
  logout,
  forgotPassword,
  resetPassword,
} = require("../Controllers/Auth");
const { authenticateUser } = require("../middleware/authentication");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", authenticateUser, logout);
router.post("/verify-email", verifyEmail);
router.get("/test", authenticateUser, (req, res) => {
  res.json({
    refreshToken: req.signedCookies,
    accessToken: req.signedCookies,
  });
});
router.post("/reset-password", resetPassword);
router.post("/forgot-password", forgotPassword);

module.exports = router;
