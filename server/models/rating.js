const mongoose = require('mongoose');

/**
 * Rating model schema
 * @type {mongoose.Schema}
 */
const ratingSchema = mongoose.Schema({
  value: {type: Number, required: true, min: 0, max: 5},
  count: {type: Number, required: true},
});

module.exports = new mongoose.model('Rating', ratingSchema);
