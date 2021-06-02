import {Button, Form, Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import inputValidator from '../hooks/input-validator';
import KeywordsService from '../services/KeywordsService';
import NewRecipeForm from '../components/RecipeCreation/NewRecipeForm';

const CreateRecipe = () => {
  const [keywords, setKeywords] = useState([]);

  const GetallKeywordHandler = useCallback(async () => {
    let data = await KeywordsService.getAllKeywords();
    setKeywords((prevState => {
      return [...prevState, ...data.results];
    }));
  }, []);

  useEffect(() => {
    GetallKeywordHandler();
  }, [GetallKeywordHandler]);

  // const recipeNameRef = useRef();
  // const {
  //   value: recipeName,
  //   hasError: recipeError,
  //   valueChangeHandler: recipeNameChangeHandler,
  //   inputBlurHandler: recipeBlurChangeHandler,
  // } = inputValidator(value => value.trim() !== '' );

  // const {
  //   value: recipeName,
  //   hasError: recipeError,
  //   valueChangeHandler: recipeNameChangeHandler,
  //   inputBlurHandler: recipeBlurChangeHandler,
  // } = inputValidator(value => value.trim() !== '' );

  // const {
  //   value: recipeDescription,
  //   hasError: descriptionError,
  //   valueChangeHandler: recipeDescriptionChangeHandler,
  //   inputBlurHandler: descriptionBlurChangeHandler,
  // } = inputValidator(value => value.trim() !== '' );

  // console.log("Recipe error "+recipeError);

  if (!keywords) {
    return <div>Loading keywords...</div>;
  }

//value={recipeName} onChange={recipeNameChangeHandler} onBlur={recipeBlurChangeHandler}
  return (
      <header className="p-5">
        <Container>
          <Row>
            <Col md={6}>
              <NewRecipeForm items={keywords}/>
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
