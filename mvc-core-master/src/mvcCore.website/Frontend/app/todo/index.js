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
import { users } from './reducers/users';
import { pager } from './reducers/pager';
import { visibilityFilter } from './reducers/visibilityFilter';
import AppStateRecord from './models/appStateRecord';

const todoApp = combineReducers({ 
  todos,
  users,
  visibilityFilter,
  isLoading,
  pager
});

const initialState = new AppStateRecord();

let store = createStore(todoApp, initialState, applyMiddleware(thunk));

render (
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);