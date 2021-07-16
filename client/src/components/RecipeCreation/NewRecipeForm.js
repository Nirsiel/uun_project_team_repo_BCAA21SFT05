import {Button, Form} from 'react-bootstrap';
import React, {useEffect, useState} from 'react';
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";


let keywords = [];
const NewRecipeForm = (props) => {
  const [validated, setValidated] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    timeToPrepare: 0,
    description: '',
    instructions: '',
    ingredients: '',
    picture: '',
  });

  const changeKeywordsHandler = (event) => {
    if (keywords.includes(event.currentTarget.value)) {
      keywords = keywords.filter(item => item !== event.currentTarget.value);
    } else {
      keywords.push(event.currentTarget.value);
    }
  };

  const nameChangeHandler = (event) => {
    setFormState((prevState => {
      return {...prevState, name: event.target.value};
    }));
  };
  const timeToPrepareChangeHandler = (event) => {
    setFormState((prevState => {
      return {...prevState, timeToPrepare: parseInt(event.target.value)};
    }));
  };
  const descriptionChangeHandler = (event) => {
    setFormState((prevState => {
      return {...prevState, description: event.target.value};
    }));
  };
  const instructionsChangeHandler = (event) => {
    setFormState((prevState => {
      return {...prevState, instructions: event.target.value};
    }));
  };
  const ingredientsChangeHandler = (event) => {
    setFormState((prevState => {
      return {...prevState, ingredients: event.target.value};
    }));
  };
  const pictureChangeHandler = (event) => {
    setFormState((prevState => {
      return {...prevState, picture: event.target.value};
    }));
  };

  const formSubmissionHandler = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      setValidated(false);
      event.preventDefault();
      event.stopPropagation();
    }
    const materials = formState.ingredients.replace(/\r\n/g, '\n').
        split('\n').
        filter(line => line);

    const newRecipeData = {
      name: formState.name,
      timeToPrepare: formState.timeToPrepare,
      description: formState.description,
      instructions: formState.instructions,
      materials: materials,
      keywords: keywords,
      picture: formState.picture,
    };
    props.onCreateNewRecipe(newRecipeData);

    setValidated(true);
    keywords = [];
    setFormState({
      name: '',
      timeToPrepare: 0,
      description: '',
      instructions: '',
      ingredients: '',
      picture: '',
    });
    event.preventDefault();
  };

  useEffect(() => {
    if (props.prefetch) {
      setFormState((prevState => {
        return {
          ...prevState,
          name: props.prefetch.name,
          timeToPrepare: props.prefetch.timeToPrepare,
          description: props.prefetch.description,
          instructions: props.prefetch.instructions,
          ingredients: props.prefetch.materials.join('\n'),
          picture: props.prefetch.picture,
        };
      }));
      keywords = props.keywords;
    }
  }, [props.keywords, props.prefetch]);

  const keywordCheckboxes = props.items.map((keyword) => {

    return (
        <Form.Check
            key={keyword._id}
            onChange={changeKeywordsHandler}
            value={keyword._id}
            type="checkbox"
            className="my-1 checkbox"
            inline
            label={keyword.value}
        />);
  });

  return (
    <Form
      className="add-form shadow p-4"
      noValidate
      validated={validated}
      onSubmit={formSubmissionHandler}
    >
      <h2 className="text-center">Create recipe</h2>
      <Form.Group controlId="create-recipe-form1">
        <Form.Label className="pl-1">Recipe name</Form.Label>
        <Form.Control
          placeholder="Give your recipe a name"
          value={formState.name}
          onChange={nameChangeHandler}
          required
          type="text"
        />
      </Form.Group>
      <Form.Group controlId="create-recipe-form2">
        <Form.Label className="pl-1">Time To Prepare (min)</Form.Label>
        <Form.Control
          value={formState.timeToPrepare}
          onChange={timeToPrepareChangeHandler}
          required
          min="0"
          max="2880"
          type="number"
          placeholder="min"
        />
      </Form.Group>
      <Form.Group controlId="create-recipe-form4">
        <Form.Label className="pl-1">Description</Form.Label>
        <Form.Control
          placeholder="Describe how awesome your recipe is"
          value={formState.description}
          onChange={descriptionChangeHandler}
          required
          as="textarea"
          rows={3}
        />
      </Form.Group>
      <Form.Group controlId="create-recipe-form4">
        <Form.Label className="pl-1">Instructions</Form.Label>
        <Form.Control
          placeholder='Split steps by using Enter'
          value={formState.instructions}
          onChange={instructionsChangeHandler}
          required
          as="textarea"
          rows={3}
        />
      </Form.Group>
      <Form.Group controlId="create-recipe-form4">
        <Form.Label className="pl-1">Ingredients</Form.Label>
        <Form.Control
          placeholder='Split ingredient name and amount by using colon ":"'
          value={formState.ingredients}
          onChange={ingredientsChangeHandler}
          required
          type="text"
          as="textarea"
        />
      </Form.Group>
      <Form.Group controlId="create-recipe-form4">
        <Form.Label className="pl-1">Picture</Form.Label>
        <Form.Control
          placeholder="Place URL"
          value={formState.picture}
          onChange={pictureChangeHandler}
          required
          type="text"
        />
      </Form.Group>


      {/* https://www.npmjs.com/package/react-multiselect-dropdown-bootstrap */}
      <Form.Group controlId="create-recipe-form4">
      <Form.Label className="pl-1">Key Words</Form.Label>
      <DropdownMultiselect
        className="add-form-dropdown"
        options={["Australia", "Canada", "USA", "Poland", "Spain", "France"]}
        name="countries"
      />
      </Form.Group>

      {/* <Form.Group controlId="create-recipe-form4">
          {keywordCheckboxes}
        </Form.Group> */}
      <Button className="mt-4 color offset-1 col-10" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
export default NewRecipeForm;
