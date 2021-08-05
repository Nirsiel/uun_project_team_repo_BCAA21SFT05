import { Container, Row, Col, Form } from "react-bootstrap";
import { Button, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useCallback, useEffect, useState } from "react";
import KeywordsService from "../services/KeywordsService";
import NewRecipeForm from "../components/RecipeCreation/NewRecipeForm";
import RecipeService from "../services/RecipeService";
import RatingService from "../services/RatingService";
import ReactStars from "react-rating-stars-component";
import Placeholder from "../images/placeholder.jpeg";

const CreateRecipe = () => {
  const [keywords, setKeywords] = useState([]);

  const getAllKeywordHandler = useCallback(async () => {
    let data = await KeywordsService.getAllKeywords();
    setKeywords((prevState) => {
      return [...prevState, ...data.results];
    });
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
    if (result.valid === true) {
      return alert("Recept pridaný");
    }
  };

  if (!keywords) {
    return <div>Loading keywords...</div>;
  }

  const RatingStars = {
    size: 35,
    count: 5,
    isHalf: true,
    value: 0,
    color: "grey",
    activeColor: "grey",
  };

  return (
    <NewRecipeForm
      items={keywords}
      onCreateNewRecipe={onCreateNewRecipeHandler}
    />
  );
};

export default CreateRecipe;
