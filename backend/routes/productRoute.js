const express = require("express");
const { createProduct, getProduct, getProducts, deleteProduct, updateProduct, reviewProduct, deleteReview, updateReview } = require("../controllers/productController");
const router = express.Router();
const { protect, adminOnly } = require("../middleware/authMiddleware");


router.post("/", protect, adminOnly, createProduct);
router.get("/:id", getProduct);
router.get("/", getProducts);
router.delete("/:id", protect, adminOnly, deleteProduct);
router.patch("/:id", protect, adminOnly, updateProduct);
router.patch("/review/:id", protect, reviewProduct);
router.patch("/deleteReview/:id", protect, deleteReview);
router.patch("/updateReview/:id", protect, updateReview);


module.exports = router;
