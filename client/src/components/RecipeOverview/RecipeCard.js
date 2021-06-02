import React from 'react';
import {Button, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

const RecipeCard = (props) => {
  let arr = props.description.split(' ')
  let trimmedText = arr.slice(0, 10).join(" ").concat("...")
  return (
      <Card style={{width: '18rem'}} className="mt-4">
        <Card.Img variant="top"
                  src="https://d1e3z2jco40k3v.cloudfront.net/-/media/mccormick-us/recipes/grill-mates/r/800/roasted-garlic-grilled-vegetables.jpg"/>
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text className="pb-2">
            {props.description.length > 50 ?  trimmedText : props.description}
          </Card.Text>
          <Button><Link className="link-clearing text-white" to={`/show-recipe/${props.id}`}>Show
            me recipe</Link></Button>
        </Card.Body>
      </Card>
  );
};

export default RecipeCard;
