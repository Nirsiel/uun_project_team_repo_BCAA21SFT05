const mongoose = require("mongoose");

const materialsSchema = mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    values: {type: [{}], required: true}
});

module.exports = new mongoose.model("Material", materialsSchema);