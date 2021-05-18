import React from 'react';
import { Button, Navbar, Nav, NavDropdown, Form, FormControl, Container, Row, Col, Table, Carousel, CarouselItem, CarouselCaption, Card, CardBody, CardImg, } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

const RecipeCard = () => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://d1e3z2jco40k3v.cloudfront.net/-/media/mccormick-us/recipes/grill-mates/r/800/roasted-garlic-grilled-vegetables.jpg" />
                 <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text className="pb-2">
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                    <Button><Link className="link-clearing text-white" to="/show-recipe">Show me recipe</Link></Button>
                    
                </Card.Body>
            </Card>
    )
}

export default RecipeCard
