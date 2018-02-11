const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true, lowercase: true, unique: true },
  created_on: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Category", categorySchema);
