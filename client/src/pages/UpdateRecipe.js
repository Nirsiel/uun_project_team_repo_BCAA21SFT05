import {Button, Form, Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

const UpdateRecipe = () => {
  return (
      <header className="p-5 bg-warning">
        <Container>
          <Row className="justify-content-around">
            <Col md={6}>
              <Form>
                <Form.Group controlId="create-recipe-form1">
                  <Form.Label>Recipe name</Form.Label>
                  <Form.Control type="text" placeholder="Grilled chicken"/>
                </Form.Group>
                <Form.Group controlId="create-recipe-form2">
                  <Form.Label>Time To Prepare</Form.Label>
                  <Form.Control type="number" placeholder="min"/>
                </Form.Group>
                <Form.Group controlId="create-recipe-form4">
                  <Form.Label>Description</Form.Label>
                  <Form.Control min="0" max="100" as="textarea" rows={3}/>
                </Form.Group>
                <Form.Group controlId="create-recipe-form4">
                  <Row id="test-render">
                    <Col>
                      <Form.Label>Ingredient</Form.Label>
                      <Form.Control type="text"/>
                    </Col>
                    <Col>
                      <Form.Label>Amount</Form.Label>
                      <Form.Control type="text"/>
                    </Col>
                  </Row>
                  <Button className="mt-1" variant="flat" type="button">
                    Add more
                  </Button>
                </Form.Group>

                <Form.Group controlId="create-recipe-form4">
                  <Form.Check
                      type="checkbox"
                      className="checkbox"
                      inline
                      label="Fast"
                  />
                  <Form.Check
                      type="checkbox"
                      className="checkbox"
                      inline
                      label="Easy"

                  />
                  <Form.Check
                      type="checkbox"
                      className="checkbox"
                      inline
                      label="Idk"
                  />
                </Form.Group>

                <Button className="mt-4" variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>

      </header>
  );
};

export default UpdateRecipe;
