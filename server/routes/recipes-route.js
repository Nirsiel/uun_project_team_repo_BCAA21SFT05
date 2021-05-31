const express = require("express");
const router = express.Router();

//Controllers
const { getAllRecipes,getLimitedRecipes, getNextRecipes, getRecipeById, addNewRecipe, editRecipe, deleteRecipe } = require("../controllers/recipes-controller");

//routing

//getting all recipes
router.get("/", getAllRecipes);

//getting limited number of recipes
router.get("/limit/:limit", getLimitedRecipes);

//getting next n recipes while having x
router.get("/next/:have/:next",getNextRecipes);

//getting id specific recipe
router.get("/:id", getRecipeById);

//creating new recipe
router.post("/", addNewRecipe);

//editing existing recipe
router.patch("/:id", editRecipe);

//deleting existing recipe
router.delete("/:id", deleteRecipe);

module.exports = router;
