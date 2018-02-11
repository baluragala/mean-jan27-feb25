const Category = require("../models/category");

module.exports = {
  create: function(req, res, next) {
    console.log(req.body);
    Category.create(req.body)
      .then(function(product) {
        res.status(201).json(product);
      })
      .catch(function(err) {
        res.status(500).json(err);
      });
  },

  findById: function(req, res, next) {
    Category.findOne({ _id: req.params.id }).then(function(product) {
      if (!product) {
        res.status(404).end();
        return;
      }
      res.json(product);
    });
  }
};
