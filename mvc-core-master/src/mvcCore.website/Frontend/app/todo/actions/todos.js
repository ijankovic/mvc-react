import Const from '../utilities/constants';
import fetch from 'isomorphic-fetch';
import { setLoadingState } from './common';

const url = '/api/Todo';

const turnOffLoader = (dispatch) => dispatch(setLoadingState(false));
const turnOnLoader = (dispatch) => dispatch(setLoadingState(true));
const getResponseJson = response => response.json();

const createRequest = (method, body) => ({
  method,
  body,
  headers: {
    'Content-Type': 'application/json'
  }
});

const createPostRequest = (body) => createRequest('POST', body);
const createPutRequest = (body) => createRequest('PUT', body);
const createDeleteRequest = (body) => createRequest('DELETE', body);
const createGetRequest = () => createRequest('GET');

const addTodo = (todo) => {
  return {
    type: Const.actions.ADD_TODO,
    todo
  };
};

export const addTodoServer = (text) => {
  return dispatch => {
    //turnOnLoader(dispatch);
    return fetch(url, createPostRequest(JSON.stringify({ Text: text })))
            .then(getResponseJson)
            .then(todo => {
              dispatch(addTodo(todo));
              //turnOffLoader(dispatch);
            });
  };
};

const updateTodo = (todo) => {
  return {
    type: Const.actions.UPDATE_TODO,
    todo
  };
};

export const toggleTodoServer = (todo) => {
  const todoJson = {
    id: todo.id,
    text: todo.text,
    isCompleted: !todo.isCompleted
  };

  return dispatch => {
        //turnOnLoader(dispatch);
    return fetch(url, createPutRequest(JSON.stringify(todoJson)))
            .then(getResponseJson)
            .then(todo => {
              dispatch(updateTodo(todo));
                //turnOffLoader(dispatch);
            });
  };
};

export const toggleTodoSelection = (val, todo) => {
  return {
    type: Const.actions.TOGGLE_TODO_SELECTION,
    val,
    todo
  };
};

export const toggleAllSelections = (val) => {
  return{
    type: Const.actions.TOGGLE_ALL_SELECTIONS,
    val
  };
};

const removeTodo = (id) => {
  return {
    type: Const.actions.REMOVE_TODO,
    id
  };
};

const removeTodos = (ids) => {
  return {
    type: Const.actions.REMOVE_TODOS,
    ids
  };
};

export const bulkDeleteServer = () => (dispatch, getState) => {

  const {todos} = getState();
  let selectedIds = todos.filter(x => x.isSelected).map(t => { return t.id; });

  return dispatch => {
    return fetch(url, createDeleteRequest(JSON.stringify(selectedIds)))
            .then(() => {
              dispatch(removeTodos(selectedIds));
            });
  };
};

export const removeTodoServer = (id) => {
  return dispatch => {
        //turnOnLoader(dispatch);
    return fetch(url, createDeleteRequest(id.toString()))
            .then(() => {
              dispatch(removeTodo(id));
                //turnOffLoader(dispatch);
            });
  };
};

const addTodos = (todos) => {
  return {
    type: Const.actions.ADD_TODOS,
    todos
  };
};



export const loadAllTodosServer = () => {
  return dispatch => {
    turnOnLoader(dispatch);
    return fetch(url, createGetRequest())
            .then(getResponseJson)
            .then(todos => {
              dispatch(addTodos(todos));
              turnOffLoader(dispatch);
            });
  };
};