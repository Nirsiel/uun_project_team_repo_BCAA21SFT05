import { Button, Navbar, Nav, NavDropdown, Form, FormControl, Container, Row, Col, Table, Carousel, CarouselItem, CarouselCaption, Card, CardBody, CardImg, } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'


const CreateRecipe = () => {
    return (
        <header className="p-5">
            <Container>
                <Row>
                    <Col md={6}>
                        <Form>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Recipe name</Form.Label>
                                <Form.Control type="text" placeholder="Grilled chicken" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Number of people</Form.Label>
                                <Form.Control as="select">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Example textarea</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                    <Col md={6}>
                        Tu bude preview receptu
                    </Col>
                </Row> 
            </Container>
            
        </header>    
    )
}

export default CreateRecipe
