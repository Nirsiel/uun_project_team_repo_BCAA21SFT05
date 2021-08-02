import { Container, Row, Col, Form } from "react-bootstrap";
import { Button, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useCallback, useEffect, useState } from "react";
import KeywordsService from "../services/KeywordsService";
import NewRecipeForm from "../components/RecipeCreation/NewRecipeForm";
import RecipeService from "../services/RecipeService";
import RatingService from "../services/RatingService";
import ReactStars from "react-rating-stars-component";
import Placeholder from "../images/placeholder.jpeg";

const CreateRecipe = () => {
  const [keywords, setKeywords] = useState([]);

  const getAllKeywordHandler = useCallback(async () => {
    let data = await KeywordsService.getAllKeywords();
    setKeywords((prevState) => {
      return [...prevState, ...data.results];
    });
  }, []);

  useEffect(() => {
    getAllKeywordHandler();
  }, [getAllKeywordHandler]);

  const onCreateNewRecipeHandler = async (newRecipeData) => {
    const rating = await RatingService.createNewRating();
    const recipeData = {
      ...newRecipeData,
      rating: rating.result._id,
    };
    const result = await RecipeService.addNewRecipe(recipeData);
    if (result.valid === true) {
      return alert("Recept pridaný");
    }
  };

  if (!keywords) {
    return <div>Loading keywords...</div>;
  }

  const RatingStars = {
    size: 35,
    count: 5,
    isHalf: true,
    value: 0,
    color: "grey",
    activeColor: "grey",
  };

  //value={recipeName} onChange={recipeNameChangeHandler} onBlur={recipeBlurChangeHandler}
  return (

            <NewRecipeForm items={keywords}
                           onCreateNewRecipe={onCreateNewRecipeHandler}/>
                           
    // <section className="pt-7">
    //   <Form className="add-form shadow p-0 pt-4 pb-4" noValidate>
    //     <Container>
    //       <Row className="pb-5">
    //         <Col>
    //           <Image className="recipe-profile-photo" src={Placeholder} fluid />
    //           <span className="cooking-time badge">
    //             <i className="inline far fa-clock" />
    //             <Form.Group controlId="create-recipe-form2">
    //               <Form.Control
    //                 className="badge-time-to-prepare"
    //                 required
    //                 min="0"
    //                 max="2880"
    //                 type="number"
    //                 placeholder="10min"
    //               />
    //             </Form.Group>
    //           </span>
    //           <Form.Group controlId="create-recipe-form4">
    //             <Form.Control
    //               placeholder="Place your Picture URL"
    //               required
    //               type="text"
    //             />
    //           </Form.Group>
    //         </Col>
    //         <Col className="mx-3">
    //           <Form.Group controlId="create-recipe-form1">
    //             <Form.Control
    //               className="testujeme"
    //               placeholder="Name your Recipe"
    //               required
    //               type="text"
    //             />
    //           </Form.Group>
    //           <div>
    //             <ReactStars {...RatingStars} />
    //             <p className="faded-text">(You can't add ratings yet)</p>
    //           </div>
    //           <Form.Group className="pt-4" controlId="create-recipe-form4">
    //             <Form.Control
    //               placeholder="Describe how awesome your recipe is"
    //               required
    //               as="textarea"
    //               rows={3}
    //             />
    //           </Form.Group>
    //           <br />
    //           <Form.Group controlId="create-recipe-form4">
    //             <Form.Label className="pl-1">Key Words</Form.Label>
    //           </Form.Group>
    //         </Col>
    //       </Row>
    //     </Container>
    //     <article className="pt-3">
    //       <Container className="p-4 pb-5">
    //         <Row className="align-items-start">
    //           <Col className="ingredient-list bg-white" xs={4}>
    //             <ul className="p-3">
    //               <li>
    //                 <h3>Ingredients</h3>
    //               </li>
    //             </ul>
    //             <Form.Group controlId="create-recipe-form4">
    //               <Form.Control
    //                 placeholder='Split ingredient name and amount by using colon ":"'
    //                 required
    //                 type="text"
    //                 as="textarea"
    //               />
    //             </Form.Group>
    //           </Col>
    //           <Col className="bg-white" md={{ span: 7, offset: 1 }}>
    //             <ul className="p-3">
    //               <li className="">
    //                 <h3>Cooking instructions</h3>
    //               </li>
    //             </ul>
    //             <Form.Group controlId="create-recipe-form4">
    //               <Form.Control
    //                 placeholder="Split steps by using Enter"
    //                 required
    //                 as="textarea"
    //                 rows={3}
    //               />
    //             </Form.Group>
    //           </Col>
    //         </Row>
    //       </Container>
    //     </article>
    //     <Row>
    //       <Button
    //         className="mt-4 mr-3 offset-5  col-2"
    //         variant="secondary"
    //         type="submit"
    //       >
    //         <i class="fas fa-trash"></i> Dump this recipe
    //       </Button>
    //       <Button
    //         className="mt-4 color col-3"
    //         type="submit"
    //       >
    //         Submit
    //       </Button>
    //     </Row>
        
    //   </Form>
    // </section>
  );
};

export default CreateRecipe;
