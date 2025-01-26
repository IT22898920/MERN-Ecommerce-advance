const express = require("express");
const { createProduct, getProduct, getProducts } = require("../controllers/productController");
const router = express.Router();
const { protect, adminOnly } = require("../middleware/authMiddleware");


router.post("/", protect, adminOnly, createProduct);
router.get("/:id", getProduct);
router.get("/", getProducts);


module.exports = router;
