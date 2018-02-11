const express = require("express");
const router = express.Router();
const controller = require("../controllers/products");

router.post("/", controller.create);
router.get("/:id", controller.findById);
router.get("/related/:categoryId", controller.findRelatedProducts);

module.exports = router;
