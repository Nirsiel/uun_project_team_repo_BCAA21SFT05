const Recipe = require("../models/recipe");
const Conversions = require("../util/conversions");

const getAllRecipes = async (req, res) => {
    let result;

    try{
        result = await Recipe.find();
        res.status(200).json({valid: true, result});
    }
    catch (exception) {
        res.status(500).json({valid: false, exception});
    }
}

const getRecipeById = async (req, res) => {
    const recipeId = req.params.id;
    let result;

    try{
        result = await Recipe.findById(recipeId);
        res.status(200).json({valid: true, result});
    }
    catch (exception){
        res.status(500).json({valid: false, exception});
    }
}

const addNewRecipe = async (req, res) => {
    const {name, description, instructions, timeToPrepare, materials, keywords} = req.body;

    const newRecipe = new Recipe({
        createdOn: Conversions.convertToNormalDate(new Date()),
        name: name,
        description: description,
        instructions: instructions,
        timeToPrepare: timeToPrepare,
        materials: materials,
        keywords: keywords
    });
    let result;

    try{
        result = await newRecipe.save();
        res.status(201).json({valid: true, result});
    }
    catch(exception) {
        res.status(500).json({valid: false, exception});
    }
}
const editRecipe = async (req, res) => {
    const recipeId = req.params.id;
    const {name, description, instructions, timeToPrepare, materials, keywords} = req.body;
    let updatedRecipe;

    try{
        updatedRecipe = await Recipe.findById(recipeId);
    } 
    catch (exception) {
        res.status(500).json({valid: false, exception});
    }
    updatedRecipe.name = name;
    updatedRecipe.description = description;
    updatedRecipe.instructions = instructions;
    updatedRecipe.timeToPrepare = timeToPrepare;
    updatedRecipe.materials = materials;
    updatedRecipe.keywords = keywords;

    try{
        let result = await updatedRecipe.save();
        res.status(200).json({valid: true, result});
    }
    catch(exception) {
        res.status(500).json({valid: false, exception});
    }

}
const deleteRecipe = async (req, res) => {
    let recipeId = req.params.id;
    let recipe;

    try{
        recipe = await Recipe.findById(recipeId);
    }
    catch (exception){
        res.status(500).json({valid: false, exception});
    }

    try{
        await recipe.remove();
        res.status(200).json({valid: true, message: `Recipe '${recipe.name}' removed`});
    }
    catch(exception){
        res.status(500).json({valid: false, exception});
    }
}

exports.getAllRecipes = getAllRecipes;
exports.getRecipeById = getRecipeById;
exports.addNewRecipe = addNewRecipe;
exports.editRecipe = editRecipe;
exports.deleteRecipe = deleteRecipe;