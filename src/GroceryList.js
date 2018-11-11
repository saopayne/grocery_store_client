import React, {Component} from 'react';
import { connect } from 'react-redux';

import GroceryItem from './GroceryItem'
import EditComponent from './EditComponent';

class GroceryList extends Component {

    render() {
        return (
            <div>
                <h1 className="grocery-list-heading"> All your groceries </h1>
                {console.log(this.props)}
                {/*{this.props.groceryList.map((item) => (*/}
                    {/*<div key={item.id}>*/}
                        {/*{item.editing ? <EditComponent item={item} key={item.id} /> :*/}
                            {/*<GroceryItem key={item.id} item={item} />}*/}
                    {/*</div>*/}
                {/*))}*/}
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