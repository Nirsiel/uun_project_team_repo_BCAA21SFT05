const mongoose = require('mongoose');

/**
 * Recipe object schema
 * @type {mongoose.Schema}
 */
const recipeSchema = mongoose.Schema({
  createdOn: {type: Date, required: true},
  name: {type: String, required: true},
  description: {type: String, required: false},
  instructions: {type: String, required: true},
  timeToPrepare: {type: String, required: true},
  picture: {type: String, required: false},
  materials: [{type: String, required: true}],
  rating: {type: mongoose.Types.ObjectId, required: false, ref: 'Rating'},
  keywords: [{type: mongoose.Types.ObjectId, required: false, ref: 'Keyword'}],
});

module.exports = new mongoose.model('Recipe', recipeSchema);
