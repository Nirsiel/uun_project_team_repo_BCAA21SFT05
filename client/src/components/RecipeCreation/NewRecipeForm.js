import { Container, Row, Col, Form } from "react-bootstrap";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import { Button, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useCallback, useEffect, useState } from "react";
import KeywordsService from "../../services/KeywordsService";
import RecipeService from "../../services/RecipeService";
import RatingService from "../../services/RatingService";
import ReactStars from "react-rating-stars-component";
import Placeholder from "../../images/placeholder.jpeg";


const NewRecipeForm = (props) => {
  const [validated, setValidated] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    timeToPrepare: 0,
    description: '',
    instructions: '',
    ingredients: '',
    picture: '',
    keywords: []
  });

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
const keywordChangeHandler = (selected) => {
  setFormState((prevState => {
    return {...prevState, keywords: selected};
  }));
};


const RatingStars = {
  size: 35,
  count: 5,
  isHalf: true,
  value: 0,
  color: "grey",
  activeColor: "grey",
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
      picture: formState.picture,
      keywords: formState.keywords,
    };
    props.onCreateNewRecipe(newRecipeData);

    setValidated(true);
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
      //TODO: set selected keywords to the dropdown menu
    }
  }, [props.keywords, props.prefetch]);

  const pageName = () => {
    let urlPathname = window.location.pathname;
    urlPathname = urlPathname.split("/")
    let header

    if(urlPathname[1] === "update-recipe") {
      header = "Updade recipe"
    } else {
      header = "Create Recipe"
    }

    return header
  }

  if (props.items.length === 0){
    return (
        <div>No keywords loaded...</div>
    );
  }

  console.log("form state: ");
  console.log(formState);
  return (
    <section className="pt-7 bg-light">
       <h1 className="text-center pb-2">{pageName()}</h1>
    <Form className="add-form shadow p-0 pt-4 pb-4"noValidate
      validated={validated}
     onSubmit={formSubmissionHandler}>
      <Container>
        <Row className="pb-5">
          <Col>
            <Image className="recipe-profile-photo" src={Placeholder} fluid />
            <span className="cooking-time badge">
              <i className="inline far fa-clock" />
              <Form.Group controlId="create-recipe-form2">
                <Form.Control
                  placeholder="10min"
                  value={formState.timeToPrepare}
                  onChange={timeToPrepareChangeHandler}
                  className="badge-time-to-prepare"
                  required
                  min="0"
                  max="2880"
                  type="number"
                />
              </Form.Group>
            </span>
            <Form.Group controlId="create-recipe-form4">
              <Form.Control
                value={formState.picture}
                onChange={pictureChangeHandler}
                placeholder="Place your Picture URL"
                required
                type="text"
              />
            </Form.Group>
          </Col>
          <Col className="mx-3">
            <Form.Group controlId="create-recipe-form1">
              <Form.Control
                className="testujeme"
                value={formState.name}
                onChange={nameChangeHandler}
                placeholder="Name your Recipe"
                required
                type="text"
              />
            </Form.Group>
            <div>
              <ReactStars {...RatingStars} />
              <p className="faded-text">(You can't add ratings yet)</p>
            </div>
            <Form.Group className="pt-4" controlId="create-recipe-form4">
              <Form.Control
                placeholder="Describe how awesome your recipe is"
                required
                value={formState.description}
                onChange={descriptionChangeHandler}
                as="textarea"
                rows={3}
              />
            </Form.Group>
            <br />
            <Form.Group controlId="create-recipe-form4">
              <Form.Label className="pl-1">Key Words</Form.Label>
              <DropdownMultiselect
                className="add-form-dropdown"
                handleOnChange={keywordChangeHandler}
                options={props.items.map((keyword) => {
                  return {key: keyword._id, label: keyword.value}
                })}
                name="countries"
              />
            </Form.Group>
          </Col>
        </Row>
      </Container>
      <article className="pt-3">
        <Container className="p-4 pb-5">
          <Row className="align-items-start">
            <Col className="ingredient-list bg-white" xs={4}>
              <ul className="p-3">
                <li>
                  <h3>Ingredients</h3>
                </li>
              </ul>
              <Form.Group controlId="create-recipe-form4">
                <Form.Control
                  placeholder='Split ingredient name and amount by using colon ":"'
                  required
                  value={formState.ingredients}
                  onChange={ingredientsChangeHandler}
                  type="text"
                  as="textarea"
                />
              </Form.Group>
            </Col>
            <Col className="bg-white" md={{ span: 7, offset: 1 }}>
              <ul className="p-3">
                <li className="">
                  <h3>Cooking instructions</h3>
                </li>
              </ul>
              <Form.Group controlId="create-recipe-form4">
                <Form.Control
                  value={formState.instructions}
                  onChange={instructionsChangeHandler}
                  placeholder="Split steps by using Enter"
                  required
                  as="textarea"
                  rows={3}
                />
              </Form.Group>
            </Col>
          </Row>
        </Container>
      </article>
      <Row>
        <Button
          className="mt-4 mr-3 offset-5  col-2"
          variant="secondary"
          type="submit"
        >
          <i class="fas fa-trash"></i> Dump this recipe
        </Button>
        <Button
          className="mt-4 color col-3"
          type="submit"
        >
          Submit
        </Button>
      </Row>
      
    </Form>
  </section>
    // <Form
    //   className="add-form shadow p-0 pt-4 pb-4"
    //   noValidate
    //   validated={validated}
    //   onSubmit={formSubmissionHandler}
    // >
    //   <h2 className="text-center">{pageName()}</h2>
    //   <Form.Group controlId="create-recipe-form1">
    //     <Form.Label className="pl-1">Recipe name</Form.Label>
    //     <Form.Control
    //       placeholder="Give your recipe a name"
    //       value={formState.name}
    //       onChange={nameChangeHandler}
    //       required
    //       type="text"
    //     />
    //   </Form.Group>
    //   <Form.Group controlId="create-recipe-form2">
    //     <Form.Label className="pl-1">Time To Prepare (min)</Form.Label>
    //     <Form.Control
    //       value={formState.timeToPrepare}
    //       onChange={timeToPrepareChangeHandler}
    //       required
    //       min="0"
    //       max="2880"
    //       type="number"
    //       placeholder="min"
    //     />
    //   </Form.Group>
    //   <Form.Group controlId="create-recipe-form4">
    //     <Form.Label className="pl-1">Description</Form.Label>
    //     <Form.Control
    //       placeholder="Describe how awesome your recipe is"
    //       value={formState.description}
    //       onChange={descriptionChangeHandler}
    //       required
    //       as="textarea"
    //       rows={3}
    //     />
    //   </Form.Group>
    //   <Form.Group controlId="create-recipe-form4">
    //     <Form.Label className="pl-1">Instructions</Form.Label>
    //     <Form.Control
    //       placeholder='Split steps by using Enter'
    //       value={formState.instructions}
    //       onChange={instructionsChangeHandler}
    //       required
    //       as="textarea"
    //       rows={3}
    //     />
    //   </Form.Group>
    //   <Form.Group controlId="create-recipe-form4">
    //     <Form.Label className="pl-1">Ingredients</Form.Label>
    //     <Form.Control
    //       placeholder='Split ingredient name and amount by using colon ":"'
    //       value={formState.ingredients}
    //       onChange={ingredientsChangeHandler}
    //       required
    //       type="text"
    //       as="textarea"
    //     />
    //   </Form.Group>
    //   <Form.Group controlId="create-recipe-form4">
    //     <Form.Label className="pl-1">Picture</Form.Label>
    //     <Form.Control
    //       placeholder="Place URL"
    //       value={formState.picture}
    //       onChange={pictureChangeHandler}
    //       required
    //       type="text"
    //     />
    //   </Form.Group>
    //   {/*["Australia", "Canada", "USA", "Poland", "Spain", "France"]*/}
    //   <Form.Group controlId="create-recipe-form4">
    //   <Form.Label className="pl-1">Key Words</Form.Label>
    //   <DropdownMultiselect
    //     className="add-form-dropdown"
    //     handleOnChange={keywordChangeHandler}
    //     options={props.items.map((keyword) => {
    //       return {key: keyword._id, label: keyword.value}
    //     })}
    //     name="countries"
    //   />
    //   </Form.Group>

    //   {/* <Form.Group controlId="create-recipe-form4">
    //       {keywordCheckboxes}
    //     </Form.Group> */}
    //   <Button className="mt-4 color offset-1 col-10" variant="primary" type="submit">
    //     Submit
    //   </Button>
    // </Form>
  );
};
export default NewRecipeForm;
