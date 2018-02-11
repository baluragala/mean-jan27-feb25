const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, uppercase: true },
  category: { type: mongoose.Schema.ObjectId, ref: "Category" },
  description: { type: String, required: true },
  soh: Number,
  price: Number,
  created_on: { type: Date, default: Date.now },
  updated_on: { type: Date, default: Date.now }
});

productSchema.set("toJSON", { virtuals: true });

productSchema.virtual("stock_value").get(function() {
  return this.price * this.soh;
});

productSchema.pre("save", function(next) {
  this.soh = this.soh * 2;
  next();
});

productSchema.statics.findRelatedProducts = function(categoryId, callback) {
  return this.find({ category: categoryId }, callback);
};

productSchema.path("name").validate(function(name) {
  return !(name.length < 3 || name.length > 60);
}, "name should be between 3-60 chars");

module.exports = mongoose.model("Product", productSchema);
