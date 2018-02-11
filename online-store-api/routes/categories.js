const express = require("express");
const router = express.Router();
const controller = require("../controllers/categories");

router.post("/", controller.create);
router.get("/:id", controller.findById);

module.exports = router;
