import React, { Component } from 'react';
import { connect } from 'react-redux';


class EditComponent extends Component {
    handleEdit = (e) => {
        e.preventDefault();
        const newName = this.getName.value;
        const newQuantity = this.getQuantity.value;
        const newUnit = this.getUnit.value;
        const data = {
            newName,
            newQuantity,
            newUnit
        };
        this.props.dispatch({ type: 'UPDATE_GROCERY', id: this.props.item.id, data: data })
    };
    render() {
        return (
            <div key={this.props.item.id} className="grocery-item">
                <form className="form" onSubmit={this.handleEdit}>
                    <input required type="text" ref={(input) => this.getName = input}
                           defaultValue={this.props.item.title} placeholder="Enter Name" /><br /><br />
                    <input required type="text" ref={(input) => this.getQuantity = input}
                           defaultValue={this.props.item.title} placeholder="Enter Quantity" /><br /><br />
                    <input required type="text" ref={(input) => this.getUnit = input}
                           defaultValue={this.props.item.title} placeholder="Enter Unit" /><br /><br />
                    <button>Update Grocery</button>
                </form>
            </div>
        );
    }
}
export default connect()(EditComponent);