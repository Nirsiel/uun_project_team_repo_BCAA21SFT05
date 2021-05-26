import axios from "axios";

const API_URL = "http://localhost:3000";
export default class RecipeService {
    static async getAllRecipes() {
        const result = await axios.get(`${API_URL}/recipes`);
        return result.data;
    }

    static async getRecipeById(recipeId) {
        const result = await axios.get(`${API_URL}/recipes/${recipeId}`);
        return result.data;
    }

    static async addNewRecipe(newRecipe){
        const result = await axios.post(`${API_URL}/recipes`, newRecipe);
        return result.data;
    }

    static async editRecipe(updatedRecipe){
        const result = await axios.patch(`${API_URL}/recipes`, updatedRecipe);
        return result.data;
    }

    static async deleteRecipe(recipeId){
        const result = await axios.delete(`${API_URL}/recipes/${recipeId}`);
        return result.data;
    }
}
