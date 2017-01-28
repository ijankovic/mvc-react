import Immutable from 'immutable';
import React from 'react';
import { render } from 'react-dom';
import { Provider, action } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux-immutable';
import App from './containers/App';
import { isLoading } from './reducers/isLoading';
import { todos } from './reducers/todos';
import { visibilityFilter } from './reducers/visibilityFilter';
import { visibility } from './utilities/constants';
import AppStateRecord from './models/appStateRecord';
import { loadAllTodosServer } from './actions/todos'

const todoApp = combineReducers({ 
    todos,
    visibilityFilter,
    isLoading
});

const initialState = new AppStateRecord();

let store = createStore(todoApp, initialState, applyMiddleware(thunk));

render (
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)