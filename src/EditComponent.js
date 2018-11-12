import React, { Component } from 'react';
import { connect } from 'react-redux';
import {store} from './_helpers/store'
import { groceryActions } from '../src/_actions';


class EditComponent extends Component {

    handleEdit = (e) => {
        e.preventDefault();
        const newName = this.getName.value;
        const newQuantity = this.getQuantity.value;
        const newUnit = this.getUnit.value;
        const data = {
            id: this.props.item.id,
            name: newName,
            quantity: newQuantity,
            unit: newUnit
        };
        store.dispatch(groceryActions.update(data));
    };

    render() {
        return (
            <div key={this.props.item.id} className="grocery-item">
                <form className="form" onSubmit={this.handleEdit}>
                    <input required type="text" ref={(input) => this.getName = input}
                           defaultValue={this.props.item.name} placeholder="Enter Name" /><br /><br />
                    <input required type="text" ref={(input) => this.getQuantity = input}
                           defaultValue={this.props.item.quantity} placeholder="Enter Quantity" /><br /><br />
                    <input required type="text" ref={(input) => this.getUnit = input}
                           defaultValue={this.props.item.unit} placeholder="Enter Unit" /><br /><br />
                    <button>Update Grocery</button>
                </form>
            </div>
        );
    }
}

export default connect()(EditComponent);