import React from 'react';
import { Button, Navbar, Nav, NavDropdown, Form, FormControl, Container, Row, Col, Table, Carousel, CarouselItem, CarouselCaption, Card, CardBody, CardImg, } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

const NavigationBar = () => {
    return (
        <div className="shadow container-fluid">
          <Navbar className="p-3 px-5" bg="light">
            <Navbar.Brand href="/">THE COOKBOOK</Navbar.Brand>
              <Nav className="ml-auto">
              <Link className="link-clearing nav-link" to="/create-recipe">Create recipe</Link>
                <NavDropdown title="Roles" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">User</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Editor</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Master</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Support us</NavDropdown.Item>
                </NavDropdown>
              </Nav>
          </Navbar>
      </div>

    )
}

export default NavigationBar
