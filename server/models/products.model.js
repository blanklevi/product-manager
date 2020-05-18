const mongoose = require("mongoose");
const requiredErrMsg = "{PATH} is required.";

// PATH gets replaced by the key name
const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, requiredErrMsg],
      minlength: [2, "{PATH} must be at least {MINLENGTH} characters"],
    },
    price: {
      type: Number,
      required: [true, requiredErrMsg],
      min: [0, "{PATH} must be at least 0"],
    },
    description: {
      type: String,
      required: [true, requiredErrMsg],
      minlength: [2, "{PATH} must be at least {MINLENGTH} characters"],
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
