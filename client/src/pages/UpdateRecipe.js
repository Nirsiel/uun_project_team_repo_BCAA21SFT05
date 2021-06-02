import {Button, Form, Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import inputValidator from '../hooks/input-validator';
import KeywordsService from '../services/KeywordsService';
import NewRecipeForm from '../components/RecipeCreation/NewRecipeForm';


const UpdateRecipe = () => {
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
