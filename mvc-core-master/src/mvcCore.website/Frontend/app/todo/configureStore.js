import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux-immutable';
import { isLoading } from './reducers/isLoading';
import { todos } from './reducers/todos';
import { filter } from './reducers/filter';
import { pager } from './reducers/pager';
import { visibilityFilter } from './reducers/visibilityFilter';
import AppStateRecord from './models/appStateRecord';

const todoApp = combineReducers({ 
  todos,
  filter,
  visibilityFilter,
  isLoading,
  pager,
});

const initialState = new AppStateRecord();

export default function configureStore() {
  return createStore(todoApp, initialState, applyMiddleware(thunk));
}