const mongoose = require("mongoose");

const keywordSchema = mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    value: {type: String, required: true}
});

module.exports = new mongoose.model("Keyword", keywordSchema);