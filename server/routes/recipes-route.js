const express = require("express");
const router = express.Router();

//Controllers
const { getAllRecipes, getRecipeById, addNewRecipe, editRecipe, deleteRecipe } = require("../controllers/recipes-controller");

//routing

//getting all recipes
router.get("/", getAllRecipes);

//getting id specific recipe
router.get("/:id", getRecipeById);

//creating new recipe
router.post("/", addNewRecipe);

//editing existing recipe
router.patch("/:id", editRecipe);

//deleting existing recipe
router.delete("/:id", deleteRecipe);

module.exports = router;