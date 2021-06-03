import {Button, Form} from 'react-bootstrap';
import React, {useState} from 'react';

let keywords = [];
const NewRecipeForm = (props) => {
  const [validated, setValidated] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    timeToPrepare: 0,
    description: '',
    instructions: '',
    ingredients: '',
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
    };
    console.log('newRecipeData: ' + newRecipeData);
    props.onCreateNewRecipe(newRecipeData);

    setValidated(true);
    keywords = [];
    setFormState({
      name: '',
      timeToPrepare: 0,
      description: '',
      instructions: '',
      ingredients: '',
    });
    event.preventDefault();
  };
  const keywordCheckboxes = props.items.map((keyword) => {

    return <Form.Check
        onChange={changeKeywordsHandler}
        value={keyword._id}
        type="checkbox"
        className="my-1 checkbox"
        inline
        label={keyword.value}
    />;
  });

  return (
      <Form noValidate validated={validated}
            onSubmit={formSubmissionHandler}>
        <Form.Group controlId="create-recipe-form1">
          <Form.Label>Recipe name</Form.Label>
          <Form.Control value={formState.name} onChange={nameChangeHandler}
                        required type="text"/>
        </Form.Group>
        <Form.Group controlId="create-recipe-form2">
          <Form.Label>Time To Prepare (min)</Form.Label>
          <Form.Control value={formState.timeToPrepare}
                        onChange={timeToPrepareChangeHandler} required min="0"
                        max="2880"
                        type="number"
                        placeholder="min"/>
        </Form.Group>
        <Form.Group controlId="create-recipe-form4">
          <Form.Label>Description</Form.Label>
          <Form.Control value={formState.description}
                        onChange={descriptionChangeHandler} required
                        as="textarea"
                        rows={3}/>
        </Form.Group>
        <Form.Group controlId="create-recipe-form4">
          <Form.Label>Instructions</Form.Label>
          <Form.Control value={formState.instructions}
                        onChange={instructionsChangeHandler} required
                        as="textarea"
                        rows={3}/>
        </Form.Group>
        <Form.Group controlId="create-recipe-form4">
          <Form.Label>Ingredients</Form.Label>
          <Form.Control value={formState.ingredients}
                        onChange={ingredientsChangeHandler} required
                        type="text"
                        as="textarea"/>
        </Form.Group>

        <Form.Group controlId="create-recipe-form4">
          {keywordCheckboxes}
        </Form.Group>
        <Button className="mt-4" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
  );
};
export default NewRecipeForm;
