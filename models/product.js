const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  colors: {
    type: [String],
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  featured: {
    type: Boolean,
    default: false
  },
  shipping: {
    type: Boolean,
    default: false
  },
  stock: {
    type: Number,
    required: true
  },
  reviews: {
    type: Number,
    required: true
  },
  stars: {
    type: Number,
    required: true
  },
  images: {
    "type": "array",
    "items": {
      "type": "string",
      "format": "uri"
    }
  }
});


module.exports = mongoose.model("Product", productSchema);
