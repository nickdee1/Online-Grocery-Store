import React from 'react';
import Header from "./Header";
import './App.css';
import Subheader from "./components/Subheader";
import Item from "./components/Item";

function App() {
  return (
    <div>
      <Header/>
      <Subheader/>

      <h1 style={{paddingLeft: "20px", marginTop: "20px", marginBottom: "10px"}}>Category</h1>

      <div class="app">
        <Item itemName="Meat" price="200"/>
        <Item itemName="Bread" price="18"/>
      </div>

    </div>
  );
}

export default App;
