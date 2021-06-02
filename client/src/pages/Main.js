import React, {useCallback, useEffect, useState} from 'react';
import {Button, Form, Container, Row, Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import RecipeList from '../components/RecipeOverview/RecipeList';
import RecipeService from '../services/RecipeService';
import MainCarouselItem1 from '../images/carousel-item-1.jpg';
import MainCarouselItem2 from '../images/carousel-item-2.jpg';
import MainCarouselItem3 from '../images/carousel-item-3.jpg';

const Main = () => {

  const [recipes, setRecipes] = useState([]);

  const loadRecipesHandler = useCallback(async () => {
    let data = await RecipeService.getLimitedRecipes(3);
    setRecipes((prevState) => {
      return [...prevState, ...data.results];
    });
  }, []);

  const loadNextRecipesHandler = async () => {
    let data = await RecipeService.getNextRecipes(recipes.length, 3);
    setRecipes((prevState) => {
      return [...prevState, ...data.results];
    })
  }

  useEffect(() => {
    loadRecipesHandler();
  }, [loadRecipesHandler]);

  return (
      <div className="Main">
        <Row className="carousel-bug-fix">
          <Form className="search-form form-inline col-10 mx-auto p-4">
            <Form.Control className="rounded-0 col-10" type="search"
                          placeholder="Search"/>
            <Button className="rounded-0 search-button" type="submit">
              Search
            </Button>
          </Form>
          <Carousel className="dark-mood">
            <Carousel.Item className="c-item">
              <img
                  className="d-block w-100 c-image"
                  src={MainCarouselItem1}
                  alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item className="c-item">
              <img
                  className="d-block w-100 c-image"
                  src={MainCarouselItem2}
                  alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item className="c-item">
              <img
                  className="d-block w-100 c-image"
                  src={MainCarouselItem3}
                  alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Row>


        <section className="p-4">
          <Container>
            <div className="text-center">
              <h1 className="p-4">Our recipes</h1>
              <div className="row justify-content-center mb-5">
                <p className="introduction-text col-8">Browse our full
                  collection
                  of inspiring recipe ideas
                  to cook at home.
                  It's a virtual world tour of cuisines, from the adventurous to
                  the familiar.
                  You'll find quick meals, family favourites and lighter dishes
                  too.
                </p>
              </div>
            </div>
            {<RecipeList items={recipes}/>}
            <div className="text-center">
              <Button onClick={loadNextRecipesHandler} className="rounded-0 search-button"
                      type="button">
                Load more
              </Button>
            </div>

          </Container>
        </section>
      </div>
  );
};

export default Main;
