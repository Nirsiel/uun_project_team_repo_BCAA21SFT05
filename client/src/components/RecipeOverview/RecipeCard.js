import React from "react";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const RecipeCard = (props) => {
  let arr = props.description.split(" ");
  let trimmedText = arr.slice(0, 8).join(" ").concat("...");
  console.log(props);
  return (
    <Card style={{ width: "22rem" }} className="karta shadow mt-4">
      <Card.Img className="card-image" variant="top" src={props.picture} />
      <Card.Body className="card-body d-flex flex-column justify-content-between pb-1">
        <Card.Title className="card-title text-dark mt-3">
          {props.name}
        </Card.Title>
        <Card.Text className="pb-1 my-4">
          {props.description.length > 40 ? trimmedText : props.description}
        </Card.Text>
      </Card.Body>
      <div className="d-flex justify-content-between">
        <p className="m-2 ml-3 d-inline text-muted">
          <span>
            {" "}
            <i className="far fa-clock" /> {props.timeToPrepare} min
          </span>
        </p>
        <Button className="show-recipe-btn float-right mb-4 mr-4">
          <Link
            className="link-clearing text-white"
            to={`/show-recipe/${props.id}`}
          >
            Show me detail
          </Link>
        </Button>
      </div>
    </Card>
  );
};

export default RecipeCard;
