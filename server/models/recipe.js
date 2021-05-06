const mongoose = require("mongoose");
const keyword = require("./keyword");
const materials = require("./materials");

const recipeSchema = mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    description: {type: String, required: false},
    instructions: {type: String, required: true},
    timeToPrepare: {type: Number, required: true},
    materials: {type: materials, required: true},
    keywords: {type: [keyword], required: false} 
});

module.exports = new mongoose.model("Recipe", recipeSchema);