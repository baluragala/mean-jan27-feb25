const express = require("express");
const router = express.Router();

let id = 103;
let products = [
  { id: 100, title: "iphone", price: 80000, stock: 300 },
  { id: 101, title: "pixel", price: 70000, stock: 0 },
  { id: 102, title: "galaxy", price: 60000, stock: 300 },
  { id: 103, title: "vivo", price: 60000, stock: 300 }
];

router.get("/", function(req, res) {
  res.render("products/index", {
    title: "Retail CMS",
    subTitle: "An online app",
    products: products
  });
});

router.get("/add", function(req, res) {
  res.render("products/add", {
    title: "Retail CMS",
    subTitle: "An online app"
  });
});

router.post("/add", function(req, res) {
  let product = req.body;
  product.id = ++id;
  products.push(product);
  res.redirect("/products");
});

module.exports = router;
