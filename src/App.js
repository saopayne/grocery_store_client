import React, { Component } from 'react';
import GroceryForm from "./GroceryForm";
import GroceryList from "./GroceryList";

class App extends Component {
  render() {
    return (
        <div className="App">
            <div className="navbar">
                <h2 className="center">RideCo Grocery Project</h2>
            </div>
            <GroceryForm/>
            <GroceryList/>
        </div>
    );
  }
}

export default App;
