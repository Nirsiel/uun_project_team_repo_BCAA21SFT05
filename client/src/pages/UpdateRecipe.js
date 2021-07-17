import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useCallback, useEffect, useState} from 'react';
import KeywordsService from '../services/KeywordsService';
import NewRecipeForm from '../components/RecipeCreation/NewRecipeForm';
import RecipeService from '../services/RecipeService';

const UpdateRecipe = ({match}) => {
  const [recipe, setRecipe] = useState('');
  const [keywords, setKeywords] = useState([]);

  const getCurrentRecipeHandler = useCallback(async (recipeId) => {
    let recipeData = await RecipeService.getRecipeById(recipeId);
    setRecipe(recipeData.result);
    let keywordsData = await KeywordsService.getKeywordsByIds(
        recipeData.result.keywords);
    setKeywords(keywordsData.results);
  }, []);

  useEffect(() => {
    getCurrentRecipeHandler(match.params.recipeId);
  }, [getCurrentRecipeHandler]);

  const onUpdateRecipeHandler = async (updatedRecipeData) => {
      let recipeData = {
        ...updatedRecipeData,
        rating: recipe.rating
      }
    const result = await RecipeService.editRecipe(recipe._id, recipeData);
    if (result.valid === true) {
      return alert('Recept upravený');
    }
  }


  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (

      <header className="p-5 update-page">
        <Container>
          <Row className="justify-content-around">
            <Col md={7}>
              <NewRecipeForm items={keywords} prefetch={recipe} onCreateNewRecipe={onUpdateRecipeHandler}/>
            </Col>
          </Row>
        </Container>
      </header>
  );
};

export default UpdateRecipe;
