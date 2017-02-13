import Const from '../utilities/constants';
import Immutable from 'immutable';
import TodoRecord from '../models/todoRecord';

const todo = (state = Immutable.Record(), action) => {
  switch (action.type) {
  case Const.actions.UPDATE_TODO:
    return state.set(action.name, action.value).set('isDirty', true);
  case Const.actions.TOGGLE_TODO_SELECTION:
    return state.set('isSelected', action.value);
  default:
    return state;
  }
};

export const todos = (state = Immutable.List(), action) => {
  switch (action.type) {
  case Const.actions.ADD_TODO:
    return state.push(new TodoRecord(action.todo));
  case Const.actions.ADD_TODOS:
    return Immutable.List(action.todos.map(t => new TodoRecord(t)));
  case Const.actions.ATTACH_TODOS:
    return state.concat(action.todos.map(t => new TodoRecord(t)));
  case Const.actions.UPDATE_TODO:
    return state.map((t) => { return (t.id === action.id) ? todo(t, action) : t;});
  case Const.actions.TOGGLE_TODO_SELECTION:
    return state.map((t) => { return (t.id === action.id) ? todo(t, action) : t;});
  case Const.actions.TOGGLE_ALL_SELECTIONS:
    return state.map(t => { return t.set('isSelected', action.val);});
  case Const.actions.CLEAR_DIRTY_FLAG:
    return state.map(t => { return t.set('isDirty', false);});
  case Const.actions.REMOVE_TODO:
    return state.filter(t => t.id != action.id);
  case Const.actions.REMOVE_TODOS:
    return state.filter(t => !action.ids.includes(t.id));
  default: 
    return state;
  }
};