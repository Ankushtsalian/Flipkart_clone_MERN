const express = require("express");
const {
  createProduct,
  uploadProductImageToCloud,
  getProduct,
} = require("../Controllers/Product");

const { authenticateUser } = require("../middleware/authentication");
const router = express.Router();

router.post("/upload", uploadProductImageToCloud);
router.post("/:productType", createProduct);
router.get("/:productType", getProduct);

module.exports = router;
