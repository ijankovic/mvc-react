import Const from '../utilities/constants';
import Immutable from 'immutable';
import TodoRecord from '../models/todoRecord';

const todo = (state, action) => {
    switch (action.type) {
        case Const.actions.ADD_TODO:
            return new TodoRecord(action.todo);
        case Const.actions.UPDATE_TODO:
            if(state.id !== action.todo.id) {
                return state;
            }
            return new TodoRecord(action.todo);
        default:
            return state;
    }
}

export const todos = (state = Immutable.List(), action) => {
    switch (action.type) {
        case Const.actions.ADD_TODO:
            return state.push(todo(undefined, action));
        case Const.actions.ADD_TODOS:
            return state.concat(action.todos.map(t => new TodoRecord(t)));
        case Const.actions.UPDATE_TODO:
            return state.map(t => todo(t, action));
        case Const.actions.REMOVE_TODO:
            return state.filter(t => t.id != action.id);
        default: 
            return state;
    }
}