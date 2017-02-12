import Const from '../utilities/constants';
import fetch from 'isomorphic-fetch';
import { setLoadingState, setPagerPage, setPagerTotal } from './common';

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



export const updateTodo = (id, name, value) => {
  return {
    type: Const.actions.UPDATE_TODO,
    id:id,
    name: name,
    value: value
  };
};

export const updateFilter = (name, value)=>{
  return {
    type: Const.actions.UPDATE_FILTER,
    name: name,
    value: value
  };
};

export const toggleTodoSelection = (id, value) => {
  return {
    type: Const.actions.TOGGLE_TODO_SELECTION,
    id,
    value
  };
};

export const toggleAllSelections = (val) => {
  return {
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

export const addTodoServer = (text) => {
  return dispatch => {
    return fetch(url, createPostRequest(JSON.stringify({ Text: text })))
      .then(getResponseJson)
      .then(todo => {
        dispatch(addTodo(todo));
      });
  };
};

export const bulkDeleteServer = () => (dispatch, getState) => {

  const {todos} = getState();
  let selectedIds = todos.filter(x => x.isSelected).map(t => { return t.id; });
  var urlnew = url + '/ids';
  return fetch(urlnew, createDeleteRequest(JSON.stringify(selectedIds)))
    .then(() => {
      dispatch(removeTodos(selectedIds));
    });
};

export const saveServer = () => (dispatch, getState) => {

  const {todos} = getState();
  let updatedItems = todos.filter(x => x.isDirty);
  var urlnew = url + '/todos';
  return fetch(urlnew, createPutRequest(JSON.stringify(updatedItems)))
    .then(todos => {
      console.log(todos);
    });
};


export const removeTodoServer = (id) => {
  return dispatch => {
    return fetch(url, createDeleteRequest(id.toString()))
      .then(() => {
        dispatch(removeTodo(id));
      });
  };
};

export const loadTodos = (pageSize, page) => {
  var urlNew =  url +'/'+pageSize + '/' + page;
  
  
  return dispatch => {
    dispatch(setPagerPage(page));
    return fetch(urlNew, createGetRequest())
      .then(getResponseJson)
      .then(data => 
      {
        dispatch(setPagerTotal(data.total));
        dispatch(addTodos(data.todos));
      });
  };
};

export const fetchInitialData = () => {
  return dispatch => {
    return fetch(url, createGetRequest())
      .then(getResponseJson)
      .then(data => 
      {
        dispatch(addUsers(data));
      });
  };
};

const addTodos = (todos) => {
  return {
    type: Const.actions.ADD_TODOS,
    todos
  };
};

const addUsers = (users) => {
  return{
    type: Const.actions.UPDATE_FILTER,
    name:'users',
    value: users
  };
};





