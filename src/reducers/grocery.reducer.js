
const groceryReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_GROCERY':
            return state.concat([action.data]);
        case 'EDIT_GROCERY':
            return state.map((item)=>item.id === action.id ? {...item,editing:!item.editing}:item);
        case 'DELETE_GROCERY':
            return state.filter((item)=>item.id !== action.id);
        case 'UPDATE_GROCERY':
            return state.map((item)=>{
                if(item.id === action.id) {
                    return {
                        ...item,
                        name:action.data.newName,
                        quantity:action.data.newQuantity,
                        unit:action.data.newUnit,
                        editing: !item.editing
                    }
                } else return item;
            });
        default:
            return state;
    }
};

export default groceryReducer