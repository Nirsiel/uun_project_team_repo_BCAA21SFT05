import React, {useCallback, useEffect, useState} from 'react';
import {Button, Form, Container, Row, Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import RecipeList from '../components/RecipeOverview/RecipeList';
import RecipeService from '../services/RecipeService';
import MainCarouselItem1 from '../images/carousel-item-1.jpg';
import MainCarouselItem2 from '../images/carousel-item-2.jpg';
import MainCarouselItem3 from '../images/carousel-item-3.jpg';
import {Link} from 'react-router-dom';

const Main = () => {

  const [recipes, setRecipes] = useState([]);
  const [searchForm, setSearchForm] = useState('')

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
            <Form.Control className="rounded-0 col-12" type="search" id="search" placeholder="Search" onChange={(event) => {setSearchForm(event.target.value)}}/>
            {/* <Button className="rounded-0 search-button" type="submit">
              Search
            </Button> */}

          </Form>
          <Row className="search">
          {recipes.filter((val) => {
                if (searchForm != "") {
                 return val.name.toLowerCase().includes(searchForm.toLowerCase())
                  // return val
                }
              }).map((val) => {
                return (
                <div className="col-10 p-3">
                    <Link className="p-2" to={`/show-recipe/${val._id}`}>
                      {/* <Link className="link-clearing text-white" to={`/show-recipe/`}></Link> */}
                      <img className="float-left" width="40px" src="https://d1e3z2jco40k3v.cloudfront.net/-/media/mccormick-us/recipes/grill-mates/r/800/roasted-garlic-grilled-vegetables.jpg"/>
                      <p className="float-left p-2">{val.name }</p>
                    </Link>
                </div>
                )
              })}
          </Row>
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
