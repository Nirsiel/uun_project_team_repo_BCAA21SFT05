const express = require("express");
const router = express.Router();

//Controllers
const { getAllMaterials, getMaterialById, addNewMaterial, editMaterial, deleteMaterial } = require("../controllers/materials-controller");

//routing

//getting all materials
router.get("/", getAllMaterials);

//getting id specific material
router.get("/:id", getMaterialById);

//creating new material
router.post("/", addNewMaterial);

//editing existing material
router.patch("/:id", editMaterial);

//deleting existing material
router.delete("/:id", deleteMaterial);

module.exports = router;