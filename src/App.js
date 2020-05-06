import React from 'react';
import Header from "./components/header/Header";
import './App.css';
import Cart from "./components/cart/Cart";
import MeatCategory from "./components/categories/MeatCategory";
import BakeryCategory from "./components/categories/BakeryCategory";
import GreenCategory from "./components/categories/GreenCategory";
import DrinksCategory from "./components/categories/DrinksCategory";
import Subheader from "./components/Subheader";
import LogIn from "./components/logIn/LogIn";
import Register from "./components/register/Register";

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {
  return (
    <div>
        <Router>
            <Header/>
            <Subheader/>
            <Switch>
                  <Route path='/cart' component={Cart}/>
                  <Route path='/categories/meat' component={MeatCategory}/>
                  <Route path='/categories/bakery' component={BakeryCategory}/>
                  <Route path='/categories/green' component={GreenCategory}/>
                  <Route path='/categories/drinks' component={DrinksCategory}/>
                  <Route path='/login' component={LogIn}/>
                  <Route path='/register' component={Register}/>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
