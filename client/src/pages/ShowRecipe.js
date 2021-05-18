import React from 'react'
import { Button, Navbar, Nav, NavDropdown, Form, FormControl, Container, Row, Col, Table, Carousel, CarouselItem, CarouselCaption, Card, CardBody, CardImg, Image} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const ShowRecipe = () => {
    return (
        <section className="pt-5">
            <Container>
                <Row className="pb-5">
                    <Col>
                        <Image className="recipe-profile-photo" src="https://d1e3z2jco40k3v.cloudfront.net/-/media/mccormick-us/recipes/grill-mates/r/800/roasted-garlic-grilled-vegetables.jpg" fluid />
                        <span className="cooking-time badge"> <i className="far fa-clock"></i> 60min</span>
                    </Col>
                    <Col className="mx-3">
                        <h2>Meno super receptu</h2>
                        <div>
                            <span className= "fa fa-star checked"></span>
                            <span className= "fa fa-star checked"></span>
                            <span className= "fa fa-star checked"></span>
                            <span className= "fa fa-star checked"></span>
                            <span className= "fa fa-star unchecked"></span>
                            <span> 9 reviews</span>
                        </div>
                        <p className="my-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet reiciendis officia labore molestias reprehenderit ea quia obcaecati, impedit cumque unde aliquid in eligendi, quod minima illo nesciunt dicta repellendus ex?</p>
                        <br/>
                        <p>Tu bude zoznam keywordov</p>
                    </Col>
                </Row>
                </Container>
                <article>
                    <Container className="p-4">
                        <Row className="align-items-start">
                            <Col className="bg-white" xs={4}>
                                <ul className="p-3">
                                    <li className="pb-2"><h3>Ingredient</h3></li>
                                    <li className="ingredient-list-li clearfix">
                                        <img className="ingredient-list-photo" src="https://static.libertyprim.com/files/varietes/concombre-hollandais-large.jpg?1569524167" width="60px" height="60px" />
                                        <p>1 cucumber</p>
                                    </li>
                                    <li className="ingredient-list-li clearfix">
                                        <img className="ingredient-list-photo" src="https://static.libertyprim.com/files/varietes/concombre-hollandais-large.jpg?1569524167" width="60px" height="60px" />
                                        <p>3 cucumber</p>
                                    </li>
                                    <li className="ingredient-list-li clearfix">
                                        <img className="ingredient-list-photo" src="https://static.libertyprim.com/files/varietes/concombre-hollandais-large.jpg?1569524167" width="60px" height="60px" />
                                        <p>7 cucumber</p>
                                    </li>
                                </ul>
                            </Col>
                            <Col className="bg-white" md={{ span: 7, offset: 1 }}>
                                <ul className="p-3">
                                    <li className="pb-2">
                                        <h3>Cooking instructions</h3>
                                    </li>

                                    <li>
                                        <div className="clearfix">
                                            <h3 className="float-left p-1 pr-3">1.</h3> <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore itaque natus minus, totam tenetur fuga autem consequuntur ea, magni enim ex delectus. Nostrum dolore illo officiis repellat excepturi molestias reiciendis?</p>
                                        </div>
                                        <img className="mx-auto" src="https://static.libertyprim.com/files/varietes/concombre-hollandais-large.jpg?1569524167" width="100%" height="auto" />
                                        <hr/>
                                    </li>
                                    <li>
                                        <div className="clearfix">
                                            <h3 className="float-left p-1 pr-3">2.</h3> <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore itaque natus minus, totam tenetur fuga autem consequuntur ea, magni enim ex delectus. Nostrum dolore illo officiis repellat excepturi molestias reiciendis?</p>
                                        </div>
                                        <img className="mx-auto" src="https://www.gustoacademy.cz/image/3861/50/bowl_tereza-havlinova_dolce-vita.jpg" width="100%" height="auto" />
                                        <hr/>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                
                </article>

        </section>
    )
}

export default ShowRecipe
