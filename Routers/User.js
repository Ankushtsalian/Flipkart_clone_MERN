const express = require("express");
const { register } = require("../Controllers/Auth");
const router = express.Router();

router.post("/", register);

module.exports = router;
