/* eslint-disable jsx-a11y/img-redundant-alt */
import React, {useCallback, useEffect, useState} from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import RecipeService from '../services/RecipeService';
import KeywordsService from '../services/KeywordsService';
import RecipeKeywords from '../components/RecipeDetail/RecipeKeywords';

const ShowRecipe = ({match}) => {

  const dummy_recipe = {
    key: ' ',
    name: 'No',
    timeToPrepare: '',
    description: '',
    materials: [
      {
        ingredient: '',
        amount: '',
      },
    ],
  };
  const [recipe, setRecipe] = useState('');
  const [keywords, setKeywords] = useState([]);

  const getCurrentRecipeHandler = useCallback(async (recipeId) => {
    let recipeData = await RecipeService.getRecipeById(recipeId);
    setRecipe(recipeData.result);
    let keywordsData = await KeywordsService.getKeywordsByIds(recipeData.result.keywords);
    setKeywords(keywordsData.results);
  }, []);

  useEffect(() => {
    getCurrentRecipeHandler(match.params.recipeId);
  }, [getCurrentRecipeHandler]);

  if (!recipe) {
    return <div>Loading...</div>;
  }
  return (
      <section className="pt-5">
        <Container>
          <Row className="pb-5">
            <Col>
              <Image className="recipe-profile-photo"
                     src="https://d1e3z2jco40k3v.cloudfront.net/-/media/mccormick-us/recipes/grill-mates/r/800/roasted-garlic-grilled-vegetables.jpg"
                     fluid/>
              <span className="cooking-time badge"> <i
                  className="far fa-clock"/> {recipe.timeToPrepare} min</span>
            </Col>
            <Col className="mx-3">
              <h2>{recipe.name}</h2>
              <div>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star unchecked"></span>
                <span> 9 reviews</span>
              </div>
              <p className="my-4">{recipe.description}</p>
              <br/>
              <RecipeKeywords items={keywords}/>
            </Col>
          </Row>
        </Container>
        <article>
          <Container className="p-4">
            <Row className="align-items-start">
              <Col className="sticky-top ingredient-list bg-white" xs={4}>
                <ul className="p-3">
                  <li className="pb-2"><h3>Ingredients</h3></li>
                  {recipe.materials.map((material) => {
                    return (
                        <li className="ingredient-list-li clearfix">
                          <p>{material.ingredient}: {material.amount}</p>
                        </li>
                    );
                  })}
                </ul>
              </Col>
              <Col className="bg-white" md={{span: 7, offset: 1}}>
                <ul className="p-3">
                  <li className="pb-2">
                    <h3>Cooking instructions</h3>
                  </li>

                  <li>
                    <div className="clearfix">
                      <h3 className="float-left p-1 pr-3">1.</h3> <p>Lorem
                      ipsum,
                      dolor sit amet
                      consectetur adipisicing elit. Inventore itaque natus
                      minus,
                      totam tenetur fuga
                      autem consequuntur ea, magni enim ex delectus. Nostrum
                      dolore illo officiis
                      repellat excepturi molestias reiciendis?</p>
                    </div>
                    <img className="mx-auto"
                         src="https://static.libertyprim.com/files/varietes/concombre-hollandais-large.jpg?1569524167"
                         width="100%" height="auto" alt="Cucumber"/>
                    <hr/>
                  </li>
                  <li>
                    <div className="clearfix">
                      <h3 className="float-left p-1 pr-3">2.</h3> <p>Lorem
                      ipsum,
                      dolor sit amet
                      consectetur adipisicing elit. Inventore itaque natus
                      minus,
                      totam tenetur fuga
                      autem consequuntur ea, magni enim ex delectus. Nostrum
                      dolore illo officiis
                      repellat excepturi molestias reiciendis?</p>
                    </div>
                    <img className="mx-auto"
                         src="https://www.gustoacademy.cz/image/3861/50/bowl_tereza-havlinova_dolce-vita.jpg"
                         width="100%" height="auto" alt="Cucumber"/>
                    <hr/>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </article>
      </section>
  );
};

export default ShowRecipe;
