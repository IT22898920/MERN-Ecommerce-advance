const express = require("express");
const { createProduct } = require("../controllers/productController");
const router = express.Router();
const { protect, adminOnly } = require("../middleware/authMiddleware");


router.post("/", protect, adminOnly, createProduct);


module.exports = router;
