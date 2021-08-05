import React, { useCallback, useEffect, useState } from "react";
import { Button, Form, Container, Row, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import RecipeList from "../components/RecipeOverview/RecipeList";
import RecipeService from "../services/RecipeService";
import MainCarouselItem1 from "../images/carousel-item-1.jpg";
import MainCarouselItem2 from "../images/carousel-item-2.jpg";
import MainCarouselItem3 from "../images/carousel-item-3.jpg";
import { Link } from "react-router-dom";

const Main = () => {
  const [allRecipes, setAllRecipes] = useState([]);
  const [recipes, setRecipes] = useState([]);

  const loadRecipesHandler = useCallback(async () => {
    let data = await RecipeService.getLimitedRecipes(3);
    setRecipes((prevState) => {
      return [...prevState, ...data.results];
    });
  }, []);

  const loadAllRecipesHandler = useCallback(async () => {
    let data = await RecipeService.getAllRecipes();
    setAllRecipes((prevState) => {
      return [...prevState, ...data.results];
    });
  }, []);

  const loadNextRecipesHandler = async () => {
    let data = await RecipeService.getNextRecipes(recipes.length, 3);
    setRecipes((prevState) => {
      return [...prevState, ...data.results];
    });
  };

  useEffect(() => {
    loadAllRecipesHandler();
    loadRecipesHandler();
  }, [loadAllRecipesHandler]);

  return (
    <div className="Main">
      <Row className="carousel-bug-fix">
        <Carousel className="dark-mood">
          <Carousel.Item className="c-item">
            <img
              className="d-block h-100 w-100 c-image"
              src={MainCarouselItem1}
              alt="First slide"
            />
            <Carousel.Caption className="c-caption">
              <h1 className="text-light c-header">Delicious</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="c-item">
            <img
              className="d-block h-100 w-100 c-image"
              src={MainCarouselItem2}
              alt="Second slide"
            />

            <Carousel.Caption className="c-caption">
              <h1 className="text-light c-header">Amazing</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="c-item">
            <img
              className="d-block h-100 w-100 c-image"
              src={MainCarouselItem3}
              alt="Third slide"
            />

            <Carousel.Caption className="c-caption">
              <h1 className="text-light c-header">Flavorful</h1>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Row>

      <section className="p-4">
        <Container>
          <div className="text-center">
            <h1 className="p-4">Our recipes</h1>
            <div className="row justify-content-center mb-5">
              <p className="introduction-text col-8">
                Browse our full collection of inspiring recipe ideas to cook at
                home. It's a virtual world tour of cuisines, from the
                adventurous to the familiar. You'll find quick meals, family
                favourites and lighter dishes too.
              </p>
            </div>
          </div>
          {<RecipeList items={recipes} />}
          <div className="text-center mt-4 mb-2">
            <Button
              onClick={loadNextRecipesHandler}
              className="load-button"
              type="button"
            >
              More recipes
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Main;
