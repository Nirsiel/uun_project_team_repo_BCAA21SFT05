const mongoose = require("mongoose");
const keyword = require("./keyword");
const materials = require("./materials");

const recipeSchema = mongoose.Schema({
    description: {type: String, required: false},
    instructions: {type: String, required: true},
    timeToPrepare: {type: Number, required: true},
    materials: {type: mongoose.Types.ObjectId, required: true, ref: "Material"},
    keywords: [{type: mongoose.Types.ObjectId, required: false, ref: "Keyword"}]
});

module.exports = new mongoose.model("Recipe", recipeSchema);
