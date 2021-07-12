import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

const NavigationBar = () => {
  return (
      <div className="bg-light shadow container-fluid">
        <Navbar className="p-3 px-5" bg="light">
          <Navbar.Brand href="/">THE COOKBOOK</Navbar.Brand>
          <Nav className="ml-auto">
            <Link className="link-clearing nav-link" to="/create-recipe">Create
              recipe</Link>
          </Nav>
        </Navbar>
      </div>

  );
};

export default NavigationBar;
