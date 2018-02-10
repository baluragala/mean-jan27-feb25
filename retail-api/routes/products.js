var express = require("express");
var router = express.Router();

let id = 1;
let products = [];

router.get("/", function(req, res) {
  console.log(req.path);
  console.log(req.url);
  console.log(req.baseUrl);
  console.log(req.query);

  if (req.baseUrl.includes("app")) {
    res.render("list", { products: products });
  } else {
    res.json(products);
  }
});

router.post("/", function(req, res) {
  let productData = req.body;
  productData.id = id++;
  products.push(productData);
  res.status(201);
  res.json(productData);
});

router.put("/:id/update/:offerId/:status", function(req, res) {
  console.log(req.path);
  console.log(req.url);
  console.log(req.baseUrl);
  let id = req.params["id"];
  let productIndex = products.findIndex(function(product) {
    return product.id == id;
  });
  if (productIndex > 0) {
    let productData = req.body;
    productData.id = id;
    products[productIndex] = productData;
    res.sendStatus(202);
  }
  res.sendStatus(404);
});

router.delete("/:id", function(req, res) {
  let id = req.params["id"];
  let filteredProducts = products.filter(function(p) {
    return p.id != id;
  });
  products = filteredProducts;
  res.sendStatus(202);
});

module.exports = router;
