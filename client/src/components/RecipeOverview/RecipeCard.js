import React from 'react';
import {Button, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

const RecipeCard = (props) => {
  let arr = props.description.split(' ');
  let trimmedText = arr.slice(0, 8).join(' ').concat('...');
  console.log(props)
  return (
      <Card style={{width: '22rem'}} className="karta shadow mt-4">
         <Link className="link-clearing"
                to={`/show-recipe/${props.id}`}>
        <Card.Img className="card-image" variant="top"
                  src={props.picture}/>
        <Card.Body className="card-body d-flex flex-column justify-content-around pb-1">
          <Card.Title className="card-title text-dark">{props.name}</Card.Title>
          <Card.Text className="pb-1">
            {props.description.length > 40 ? trimmedText : props.description}
          </Card.Text>
        </Card.Body>
        {/* <Button className="show-recipe-btn mb-3 ml-3"><Link className="link-clearing text-white"
                        to={`/show-recipe/${props.id}`}>Show
            me detail</Link></Button> */}
        </Link>
      </Card>

  );
};

export default RecipeCard;
