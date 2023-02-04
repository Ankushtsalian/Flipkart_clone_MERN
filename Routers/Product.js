const express = require("express");
const {
  createProduct,
  uploadProductImageToCloud,
} = require("../Controllers/Product");

const { authenticateUser } = require("../middleware/authentication");
const router = express.Router();

router.post("/upload", uploadProductImageToCloud);
router.post("/:productType", createProduct);

module.exports = router;
