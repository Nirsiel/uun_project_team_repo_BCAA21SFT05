//TODO: left for legacy purposes.

const mongoose = require("mongoose");

const materialsSchema = mongoose.Schema({
    values: [{
        ingredient: {type: String, required: true},
            amount: {type: String, required: true}
        }]
});

module.exports = new mongoose.model("Material", materialsSchema);
