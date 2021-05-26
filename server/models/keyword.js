const mongoose = require("mongoose");

/**
 * Keyword object schema
 * @type {mongoose.Schema}
 */
const keywordSchema = mongoose.Schema({
    value: {type: String, required: true}
});

module.exports = new mongoose.model("Keyword", keywordSchema);
