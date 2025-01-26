const express = require("express");
const { createProduct, getProduct, getProducts, deleteProduct, updateProduct } = require("../controllers/productController");
const router = express.Router();
const { protect, adminOnly } = require("../middleware/authMiddleware");


router.post("/", protect, adminOnly, createProduct);
router.get("/:id", getProduct);
router.get("/", getProducts);
router.delete("/:id", protect, adminOnly, deleteProduct);
router.patch("/:id", protect, adminOnly, updateProduct);


module.exports = router;
