import React from 'react';
import Header from "./Header";
import './App.css';
import Cart from "./components/Cart/Cart";
import MeatCategory from "./components/Cart/categories/MeatCategory";
import BakeryCategory from "./components/Cart/categories/BakeryCategory";
import GreenCategory from "./components/Cart/categories/GreenCategory";
import DrinksCategory from "./components/Cart/categories/DrinksCategory";
import Subheader from "./components/Subheader";

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {
  return (
    <div>
        <Router>
            <Header/>
            <Subheader/>
              <Route path='/cart' component={Cart}/>
              <Route path='/categories/meat' component={MeatCategory}/>
              <Route path='/categories/bakery' component={BakeryCategory}/>
              <Route path='/categories/green' component={GreenCategory}/>
              <Route path='/categories/drinks' component={DrinksCategory}/>
        </Router>
    </div>
  );
}

export default App;
