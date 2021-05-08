const mongoose = require("mongoose");

const keywordSchema = mongoose.Schema({
    value: {type: String, required: true}
});

module.exports = new mongoose.model("Keyword", keywordSchema);
