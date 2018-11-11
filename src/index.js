import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import LoginApp from '../src/App/App';

import groceryReducer from './reducers/grocery.reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(groceryReducer);

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>, document.getElementById('root'));
