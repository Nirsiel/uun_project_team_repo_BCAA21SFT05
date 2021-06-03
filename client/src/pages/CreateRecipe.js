import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useCallback, useEffect, useState} from 'react';
import KeywordsService from '../services/KeywordsService';
import NewRecipeForm from '../components/RecipeCreation/NewRecipeForm';
import RecipeService from '../services/RecipeService';
import RatingService from '../services/RatingService';

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
    const rating = await RatingService.createNewRating();
    const recipeData = {
      ...newRecipeData,
      rating: rating.result._id,
    };
    const result = await RecipeService.addNewRecipe(recipeData);
    //console.log(result.valid);
    if (result.valid == true) {
      return  alert("Recept pridaný")
    }

  };

  if (!keywords) {
    return <div>Loading keywords...</div>;
  }

//value={recipeName} onChange={recipeNameChangeHandler} onBlur={recipeBlurChangeHandler}
  return (
      <header className="p-5">
        <Container>
        <Row className="justify-content-around">
            <Col md={6}>
              <NewRecipeForm items={keywords} onCreateNewRecipe={onCreateNewRecipeHandler}/>
            </Col>
          </Row>
        </Container>

      </header>
  );
};

export default CreateRecipe;
