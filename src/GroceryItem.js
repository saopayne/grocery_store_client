import React, { Component } from 'react';

import { connect } from 'react-redux';

class GroceryItem extends Component {
    render() {
        return (
            <div className="grocery-item">
                <p className="grocery-name">Name: <b>{this.props.item.name}</b></p>
                <p className="grocery-quantity">Quantity: <b>{this.props.item.quantity}</b></p>
                <p className="grocery-unit">Unit: <b>{this.props.item.unit}</b></p>
                <button className="edit"
                    onClick={()=>this.props.dispatch({type:'EDIT_GROCERY',id:this.props.item.id})}>Edit
                </button>
                <button className="delete"
                    onClick={()=>this.props.dispatch({type:'DELETE_GROCERY',id:this.props.item.id})}>Delete
                </button>
            </div>
        );
    }
}
export default connect()(GroceryItem);