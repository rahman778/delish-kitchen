import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css';

import Home from './pages/Home';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import SingleRecipe from './components/SingleRecipe/SingleRecipe';
import Videos from './pages/Videos';
import AuthProvider from './Context/AuthContext';
import ErrorMessage from './components/UI/ErrorMessage/ErrorMessage';
import SearchResults from './components/SearchResults/SearchResults';
import CuisineTypeResults from './components/CuisineTypeResults/CuisineTypeResults';
import Recipes from './pages/Recipes';


function App() {
  return (
    <AuthProvider>
      <Router>
        <Nav />
        <ErrorMessage />
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/recipe/:id" component={SingleRecipe} />
        <Route path="/cuisine/:type" component={CuisineTypeResults} />
        <Route path="/recipes" component={Recipes} />
        <Route path="/videos" component={Videos} />
        <Route path="/SearchResults/:query" component={SearchResults} />
        </Switch>
      </Router>
      <Footer />
    </AuthProvider>
  );
}

export default App;
