import './App.css';
import Main from './pages/Main';
import CreateRecipe from './pages/CreateRecipe';
import ShowRecipe from './pages/ShowRecipe';

import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer'

import ScrollToTop from './Functions/ScrollToTop'

import {BrowserRouter, Switch, Route, Link} from "react-router-dom";




import React from 'react'

const App = () => {
  return (
    <BrowserRouter>
    <NavigationBar></NavigationBar>
    <ScrollToTop />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/create-recipe" component={CreateRecipe} />
        <Route exact path="/show-recipe" component={ShowRecipe} />
      </Switch>
     <Footer></Footer> 
    </BrowserRouter>
  )
}

export default App

