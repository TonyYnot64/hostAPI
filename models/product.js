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
  images: [{ // Define images as an array of objects
    id: String,
    width: Number,
    height: Number,
    url: String,
    filename: String,
    size: Number,
    type: String
}]
});


module.exports = mongoose.model("Product", productSchema);
