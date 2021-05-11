//TODO: left for legacy purposes.

const Materials = require("../models/materials");

const getAllMaterials = async (req, res) => {
    let result;

    try{
        result = await Materials.find().exec();
        res.status(200).json({valid: true, result: result});
    }
    catch (exception){
        res.status(500).json({valid: false, exception});
    }
}
const getMaterialById = async (req, res) => {
    const materialId = req.params.id;
    let result;

    try{
        result = await Materials.findById(materialId);
        res.status(200).json({valid: true, result: result});
    }
    catch (exception) {
        res.status(500).json({valid: false, exception});
    }
}
const addNewMaterial = async (req, res) => {
    const newMaterials = new Materials({
        values: req.body.values
    });
    let result;

    try{
        result = await newMaterials.save();
        res.status(201).json({valid: true, result: result});
    }
    catch (exception){
        res.status(500).json({valid: false, exception});
    }
}
const editMaterial = async (req, res) => {
    const materialId = req.params.id;
    const { values } = req.body;
    let updatedMaterials;

    try{
        updatedMaterials = await Materials.findById(materialId);
    }
    catch (exception) {
        res.status(500).json({valid: false, exception})
    }
    updatedMaterials.values = values;
    try{
        let result = await updatedMaterials.save();
        res.status(200).json({valid: true, result: result});
    }
    catch (exception){
        res.status(500).json({valid: false, exception})
    }
}
const deleteMaterial = (req, res) => {}

exports.getAllMaterials = getAllMaterials;
exports.getMaterialById = getMaterialById;
exports.addNewMaterial = addNewMaterial;
exports.editMaterial = editMaterial;
exports.deleteMaterial = deleteMaterial;
