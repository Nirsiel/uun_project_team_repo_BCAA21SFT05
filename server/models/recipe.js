const mongoose = require("mongoose");

/**
 * Recipe object schema
 * @type {mongoose.Schema}
 */
const recipeSchema = mongoose.Schema({
    createdOn: {type: Date, required: true},
    name: {type: String, required: true},
    description: {type: String, required: false},
    instructions: {type: String, required: true},
    timeToPrepare: {type: String, arequired: true},
    materials: [{
        ingredient: {type: String, required: true},
            amount: {type: String, required: false}
        }],
    keywords: [{type: mongoose.Types.ObjectId, required: false, ref: "Keyword"}]
});

module.exports = new mongoose.model("Recipe", recipeSchema);
