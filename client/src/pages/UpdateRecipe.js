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

  if (!recipe) {
    return <div>Loading...</div>;
  }

  console.log(recipe);
  return (

      <header className="p-5 bg-info">
        <Container>
          <Row className="justify-content-around">
            <Col md={6}>
              <NewRecipeForm items={keywords}/>
            </Col>
          </Row>
        </Container>
      </header>
  );
};

export default UpdateRecipe;
