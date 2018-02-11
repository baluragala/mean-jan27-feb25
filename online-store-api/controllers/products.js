const Product = require("../models/product");

module.exports = {
  create: function(req, res, next) {
    console.log(req.body);
    Product.create(req.body)
      .then(function(product) {
        res.status(201).json(product);
      })
      .catch(function(err) {
        res.status(500).json(err);
      });
  },

  findById: function(req, res, next) {
    Product.findOne({ _id: req.params.id }).then(function(product) {
      if (!product) {
        res.status(404).end();
        return;
      }
      res.json(product);
    });
  },

  findRelatedProducts: function(req, res, next) {
    Product.findRelatedProducts(req.params.categoryId).then(products =>
      res.json(products)
    );
  }
};
