const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");


// Create Prouct
const createProduct = asyncHandler(async (req, res) => {
  const {
    name,
    sku,
    category,
    brand,
    quantity,
    price,
    description,
    image,
    regularPrice,
    color,
  } = req.body;

  //   Validation
  if (!name || !category || !brand || !quantity || !price || !description) {
    res.status(400);
    throw new Error("Please fill in all fields");
  }

  // Create Product
  const product = await Product.create({
    // user: req.user.id,
    name,
    sku,
    category,
    quantity,
    brand,
    price,
    description,
    image,
    regularPrice,
    color,
  });

  res.status(201).json(product);
});



module.exports = {
  createProduct,
}
