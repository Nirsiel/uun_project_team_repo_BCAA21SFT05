/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useCallback, useEffect, useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import RecipeService from "../services/RecipeService";
import KeywordsService from "../services/KeywordsService";
import RatingService from "../services/RatingService";
import RecipeKeywords from "../components/RecipeDetail/RecipeKeywords";
import RecipeInstructions from "../components/RecipeDetail/RecipeInstructions";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const ShowRecipe = ({ match }) => {
  const [recipe, setRecipe] = useState("");
  const [keywords, setKeywords] = useState([]);
  const [rating, setRating] = useState([]);

  const deleteRecipeHandler = async () => {
    let result = RecipeService.deleteRecipe(recipe._id);
    console.log(result);
    alert("Smazal jsi recept: " + recipe.name);
  };
  const getCurrentRecipeHandler = useCallback(async (recipeId) => {
    let recipeData = await RecipeService.getRecipeById(recipeId);
    setRecipe(recipeData.result);
    let keywordsData = await KeywordsService.getKeywordsByIds(
      recipeData.result.keywords
    );
    setKeywords(keywordsData.results);
    let ratingData = await RatingService.getRatingById(
      recipeData.result.rating
    );
    setRating(ratingData.result);
  }, []);

  useEffect(() => {
    getCurrentRecipeHandler(match.params.recipeId);
  }, [getCurrentRecipeHandler]);

  const updateCurrentRating = async (rating, value) => {
    let updateRating = await RatingService.updateRatingById(rating._id, value);
    console.log(updateRating);
  };

  if (!rating.value) {
    return <div>Loading...</div>;
  }
  let instructions = recipe.instructions.split("\n");

  let activeStarValue = Math.floor(rating.value);

  console.log(activeStarValue);
  const RatingStars = {
    size: 35,
    count: 5,
    isHalf: true,
    value: activeStarValue,
    color: "grey",
    activeColor: "yellow",
    onChange: (newValue) => {
      console.log(newValue);
      updateCurrentRating(rating, newValue);
    },
  };

  return (
    <section className="pt-7">
      <Container>
        <Row className="pb-5">
          <Col>
            <Image
              className="recipe-profile-photo"
              src={recipe.picture}
              fluid
            />
            <span className="cooking-time badge">
              {" "}
              <i className="far fa-clock" /> {recipe.timeToPrepare} min
            </span>
          </Col>
          <Col className="mx-3">
            <h2>{recipe.name}</h2>
            <div>
              <ReactStars {...RatingStars} />
              <span> {rating.count} reviews</span>
            </div>
            <p className="my-4">{recipe.description}</p>
            <br />
            <RecipeKeywords items={keywords} />
          </Col>
        </Row>
      </Container>
      <article className="pt-3">
        <Container className="p-4 pb-5">
          <Row className="align-items-start">
            <Col className="ingredient-list bg-white" xs={4}>
              <ul className="p-3">
                <li className="pb-2">
                  <h3>Ingredients</h3>
                </li>
                {recipe.materials.map((material) => {
                  let materialArray = material.split(":");
                  return (
                    <li className="ingredient-list-li clearfix">
                      <p className="strong pr-1">{materialArray[0]}:</p>
                      <p>{materialArray[1]}</p>
                    </li>
                  );
                })}
              </ul>
            </Col>
            <Col className="bg-white" md={{ span: 7, offset: 1 }}>
              <ul className="p-3">
                <li className="pb-2">
                  <h3>Cooking instructions</h3>
                </li>
                <RecipeInstructions items={instructions} />
              </ul>
            </Col>
          </Row>
          <Link
            className="inline link-clearing fade-link float-right m-2"
            to={`/update-recipe/${recipe._id}`}
          >
            <Button variant="light">Update Recipe</Button>
          </Link>
          <Link
            className="inline link-clearing fade-link float-right m-2"
            to={"/"}
          >
            <Button onClick={deleteRecipeHandler} variant="light">
              Delete Recipe
            </Button>
          </Link>
        </Container>
      </article>
    </section>
  );
};

export default ShowRecipe;
