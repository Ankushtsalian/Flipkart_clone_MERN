const express = require("express");
const { createProduct } = require("../Controllers/Product");

const { authenticateUser } = require("../middleware/authentication");
const router = express.Router();

router.post("/:productType", createProduct);

module.exports = router;
