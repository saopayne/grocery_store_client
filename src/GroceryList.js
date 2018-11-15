import React, {Component} from 'react';
import { connect } from 'react-redux';

import GroceryItem from './GroceryItem'
import EditComponent from './EditComponent';
import { groceryActions } from '../src/_actions';
import {store} from './_helpers/store'


class GroceryList extends Component {

    componentDidMount() {
        store.dispatch(groceryActions.getAll());
    }

    render() {
        return (
            <div>
                <h1 className="grocery-list-heading"> All your groceries </h1>
                {this.props.groceryList.groceryReducer.map((item) => (
                    <div key={item.id}>
                        {item.editing ? <EditComponent item={item} key={item.id} /> :
                            <GroceryItem key={item.id} item={item} />}
                    </div>
                ))}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        groceryList : state
    }
};

export default connect(mapStateToProps)(GroceryList);