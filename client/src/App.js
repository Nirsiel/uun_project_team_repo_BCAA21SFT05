import './App.css';
import Main from './pages/Main';
import CreateRecipe from './pages/CreateRecipe';
import ShowRecipe from './pages/ShowRecipe';
import UpdateRecipe from './pages/UpdateRecipe';

import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';

import ScrollToTop from './Functions/ScrollToTop';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import React from 'react';

const App = () => {
  return (
      <BrowserRouter>
        <NavigationBar/>
        <ScrollToTop/>
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route exact path="/create-recipe" component={CreateRecipe}/>
          <Route exact path="/update-recipe/:recipeId"
                 component={UpdateRecipe}/>
          <Route exact path="/show-recipe/:recipeId" component={ShowRecipe}/>
        </Switch>
        <Footer/>
      </BrowserRouter>
  );
};

export default App;

