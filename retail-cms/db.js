const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");
const connectionString = "mongodb://localhost:27017/retailcms";
mongoose.connect(connectionString, function(err) {
  if (err) {
    console.log("Connection failed");
  } else {
    console.log("Connection succeeded");
  }
});

mongoose.set("debug", true);

const productSchema = new mongoose.Schema({
  title: { type: String, required: true, default: "NAME OF PRODUCT" },
  price: Number,
  stock: Number
});

const Product = mongoose.model("Product", productSchema);

module.exports.Product = Product;
