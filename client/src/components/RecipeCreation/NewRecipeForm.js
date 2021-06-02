import {Button, Form} from 'react-bootstrap';
import React, {useState} from 'react';

const NewRecipeForm = (props) => {
  const [validated, setValidated] = useState(false);

  const formSubmissionHandler = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    console.log(test[1].props.checked);
    setValidated(true);
  };

  const test = props.items.map((keyword) => {
      return <Form.Check
          value={keyword._id}
          type="checkbox"
          className="my-1 checkbox"
          checked={true}
          inline
          label={keyword.value}
      />;
    })

  return (
      <Form noValidate validated={validated}
            onSubmit={formSubmissionHandler}>
        <Form.Group controlId="create-recipe-form1">
          <Form.Label>Recipe name</Form.Label>
          <Form.Control required type="text"/>
        </Form.Group>
        <Form.Group controlId="create-recipe-form2">
          <Form.Label>Time To Prepare (min)</Form.Label>
          <Form.Control required min="0" max="2880" type="number"
                        placeholder="min"/>
        </Form.Group>
        <Form.Group controlId="create-recipe-form4">
          <Form.Label>Description</Form.Label>
          <Form.Control required as="textarea"
                        rows={3}/>
        </Form.Group>
        <Form.Group controlId="create-recipe-form4">
          <Form.Label>Instructions</Form.Label>
          <Form.Control required as="textarea"
                        rows={3}/>
        </Form.Group>
        <Form.Group controlId="create-recipe-form4">
          <Form.Label>Ingredients</Form.Label>
          <Form.Control required type="text" as="textarea"/>
        </Form.Group>

        <Form.Group controlId="create-recipe-form4">
          {test}
        </Form.Group>

        <Button className="mt-4" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
  );
};

export default NewRecipeForm;
