const Recipe = require("../models/recipe");

/**
 * Returns response object with all recipes in database.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getAllRecipes = async (req, res) => {
    let result;

    try{
        result = await Recipe.find();
        res.status(200).json({valid: true, results: result});
    }
    catch (exception) {
        res.status(500).json({valid: false, exception});
    }
}


const getLimitedRecipes = async (req, res) => {
    const limit = parseInt(req.params.limit);
    console.log(limit);
    let result;

    try{
        result = await Recipe.find().limit(limit).exec();
        res.status(200).json({valid: true, results: result});
    }
    catch (exception)
    {
        res.status(500).json({valid: false, exception});
    }
}

const getNextNRecipes = async (req, res) => {
    const have = parseInt(req.params.have);
    const next = parseInt(req.params.next);
    let result;

    try{
        result = await Recipe.find().skip(have).limit(next);
        res.status(200).json({valid: true, results: result});
    }
    catch (exception)
    {
        res.status(500).json({valid: false, exception});
    }
}

/**
 * Returns response object with recipe specified by ID.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
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

/**
 * Creates new recipe from request and return response object with status.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const addNewRecipe = async (req, res) => {
    const {name, description, instructions, timeToPrepare, materials, keywords} = req.body;

    const newRecipe = new Recipe({
        createdOn: new Date(),
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

/**
 * Takes a ID of existing recipe document and its new version and updated recipe in database.
 * Returns a response object with status.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
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

/**
 * Deletes recipe document from database specified by ID.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
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
exports.getLimitedRecipes = getLimitedRecipes;
exports.getNextNRecipes = getNextNRecipes;
exports.getRecipeById = getRecipeById;
exports.addNewRecipe = addNewRecipe;
exports.editRecipe = editRecipe;
exports.deleteRecipe = deleteRecipe;
