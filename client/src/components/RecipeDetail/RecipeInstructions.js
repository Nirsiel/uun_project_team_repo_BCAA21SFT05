import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

const RecipeInstructions = (props) => {
  let i = 0;
  let instructions = props.items.map((instruction) => {
    i++;
    return (
      <li className="p-2">
        <div className="clearfix">
          <h3 className="float-left p-1 pr-3">{i}</h3>
          <p>{instruction}</p>
        </div>
        <hr />
      </li>
    );
  });

  return <div>{instructions}</div>;
};

export default RecipeInstructions;
