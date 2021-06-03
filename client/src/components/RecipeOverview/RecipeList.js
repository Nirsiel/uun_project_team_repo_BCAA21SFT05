import RecipeCard from './RecipeCard';
import {Row} from 'react-bootstrap';
import React from 'react';

const RecipeList = (props) => {

  let recipeCards = props.items.map((recipe) => {
    return <RecipeCard
        key={recipe._id}
        id={recipe._id}
        name={recipe.name}
        description={recipe.description}
        instructions={recipe.instructions}
        timeToPrepare={recipe.timeToPrepare}
        picture={recipe.picture}
        materials={recipe.materials}
        keywords={recipe.keywords}
    />;
  });
  return (
      <Row className="justify-content-around pb-4">
        {recipeCards}
      </Row>
  );
};

export default RecipeList;

