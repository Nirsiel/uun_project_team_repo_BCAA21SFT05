import React, { useCallback, useEffect, useState } from "react";
import { Button, Form, Container, Row, Carousel } from "react-bootstrap";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import RecipeList from "../components/RecipeOverview/RecipeList";
import RecipeService from "../services/RecipeService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const AddShowClass = () => {
  let searchResults = document.getElementById("search-results");

  searchResults.classList.add("block");
  searchResults.classList.remove("d-none");
};

const DelShowClass = () => {
  let searchResults = document.getElementById("search-results");

  searchResults.classList.remove("block");
  searchResults.classList.add("d-none");
};

const NavigationBar = () => {
  const [allRecipes, setAllRecipes] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [searchForm, setSearchForm] = useState("");

  const loadRecipesHandler = useCallback(async () => {
    let data = await RecipeService.getLimitedRecipes(3);
    setRecipes((prevState) => {
      return [...prevState, ...data.results];
    });
  }, []);

  const loadAllRecipesHandler = useCallback(async () => {
    let data = await RecipeService.getAllRecipes();
    setAllRecipes((prevState) => {
      return [...prevState, ...data.results];
    });
  }, []);

  useEffect(() => {
    loadAllRecipesHandler();
    loadRecipesHandler();
  }, [loadAllRecipesHandler]);

  return (
    <div className="nav-opacity fixed-top shadow container-fluid">
      <Navbar className="p-1 px-4">
        <Navbar.Brand href="/">THE COOKBOOK</Navbar.Brand>
        <Nav className="ml-auto">
          <Form
            onFocus={AddShowClass}
            onBlur={DelShowClass}
            id="search-form"
            className="search-form p-3"
          >
            <Form.Control
              className="rounded-0"
              type="search"
              id="search"
              placeholder="Search"
              onChange={(event) => {
                setSearchForm(event.target.value);
              }}
            />
          </Form>
          <Row id="search-results" className="search">
            {allRecipes
              .filter((val) => {
                if (searchForm !== "") {
                  return val.name
                    .toLowerCase()
                    .includes(searchForm.toLowerCase());
                }
              })
              .map((val) => {
                console.log(val);
                return (
                  <div className="p-2 search-on">
                    <Link className="p-2" onMouseDown={event => event.preventDefault()} to={`/show-recipe/${val._id}`}>
                      <img
                        className="float-left pt-2"
                        width="45px"
                        src={val.picture}
                      />
                      <p className="float-left p-2">{val.name}</p>
                    </Link>
                  </div>
                );
              })}
          </Row>

          <Link className="link-clearing nav-link my-auto" to="/create-recipe">
            Create recipe
          </Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
