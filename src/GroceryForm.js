import React, { Component } from 'react';
import { connect } from 'react-redux';

import { groceryActions } from '../src/_actions';
import {store} from './_helpers/store'


class GroceryForm extends Component {

    handleSubmit = (e) => {
        e.preventDefault();

        const name = this.getName.value;
        const quantity =  this.getQuantity.value;
        const unit =  this.getUnit.value;

        store.dispatch(groceryActions.add(name, quantity, unit));

        this.getName.value = '';
        this.getQuantity.value = '';
        this.getUnit.value = '';
    };

    render() {
        return (
            <div className="grocery-container">
                <h1 className="grocery-heading">Add Grocery</h1>
                <form className="form" onSubmit={this.handleSubmit}>
                    <input required type="text" ref={(input) => this.getName = input}
                           placeholder="Enter Name"/>
                    <br /><br />
                    <input required type="text" ref={(input) => this.getQuantity = input}
                           placeholder="Enter Quantity"/>
                    <br /><br />
                    <input required type="text" ref={(input) => this.getUnit = input}
                           placeholder="Enter Unit"/>
                    <br /><br />
                    <button>Add to list</button>
                </form>
            </div>
        );
    }
}

export default connect()(GroceryForm);