import Const from '../utilities/constants';
import Immutable from 'immutable';
import TodoRecord from '../models/todoRecord';

const todo = (state = Immutable.Record(), action) => {
  switch (action.type) {
  case Const.actions.ADD_TODO:
  case Const.actions.UPDATE_TODO:
    return new TodoRecord(action.todo);
  case Const.actions.TOGGLE_TODO_SELECTION:
    return state.set('isSelected', action.val);
  default:
    return state;
  }
};

export const todos = (state = Immutable.List(), action) => {
  switch (action.type) {
  case Const.actions.ADD_TODO:
    return state.push(todo(undefined, action));
  case Const.actions.ADD_TODOS:
    return state.concat(action.todos.map(t => new TodoRecord(t)));
  case Const.actions.UPDATE_TODO:
  case Const.actions.TOGGLE_TODO_SELECTION:
    return state.map((t) => { return (t.id === action.todo.id) ? todo(t, action) : t;});
  case Const.actions.TOGGLE_ALL_SELECTIONS:
    return state.map(t => { return t.set('isSelected', action.val);});
  case Const.actions.REMOVE_TODO:
    return state.filter(t => t.id != action.id);
  case Const.actions.REMOVE_TODOS:
    return state.filter(t => t.id != action.ids.includes(t.id));
  default: 
    return state;
  }
};