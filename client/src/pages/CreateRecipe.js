import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useCallback, useEffect, useState} from 'react';
import KeywordsService from '../services/KeywordsService';
import NewRecipeForm from '../components/RecipeCreation/NewRecipeForm';
import RecipeService from '../services/RecipeService';

const CreateRecipe = () => {
  const [keywords, setKeywords] = useState([]);

  const getAllKeywordHandler = useCallback(async () => {
    let data = await KeywordsService.getAllKeywords();
    setKeywords((prevState => {
      return [...prevState, ...data.results];
    }));
  }, []);

  useEffect(() => {
    getAllKeywordHandler();
  }, [getAllKeywordHandler]);

  const onCreateNewRecipeHandler = async (newRecipeData) => {
    const rating = '60b7bb7dd8c23e5550415590';
    const recipeData = {
      ...newRecipeData,
      rating: rating,
    };
    console.log(recipeData);
    const result = await RecipeService.addNewRecipe(recipeData);
    console.log(result);
  };

  if (!keywords) {
    return <div>Loading keywords...</div>;
  }

//value={recipeName} onChange={recipeNameChangeHandler} onBlur={recipeBlurChangeHandler}
  return (
      <header className="p-5">
        <Container>
          <Row>
            <Col md={6}>
              <NewRecipeForm items={keywords} onCreateNewRecipe={onCreateNewRecipeHandler}/>
            </Col>
            <Col md={6}>
              Tu bude preview receptu
            </Col>
          </Row>
        </Container>

      </header>
  );
};

export default CreateRecipe;
