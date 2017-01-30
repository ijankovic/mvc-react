import { connect } from 'react-redux';
import { toggleTodoServer, removeTodoServer, toggleTodoSelection, toggleAllSelections, bulkDeleteServer } from '../actions/todos';
import Immutable from 'immutable';
import TodoList from '../components/TodoList';
import TodoList2 from '../components/TodoList2';
import Const from '../utilities/constants';



const getVisibleTodos = (todos, filter) => {
  switch (filter){
  case Const.visibility.SHOW_COMPLETED:
    return todos.filter(t => t.isCompleted);
  case Const.visibility.SHOW_ACTIVE:
    return todos.filter(t => !t.isCompleted);
  default:
    return todos;
  }
};

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
    selectedCount: state.todos.filter(x => x.isSelected === true).size,
    total: state.todos.count()
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoComplete: (todo) => {
      dispatch(toggleTodoServer(todo));
    },
    onTodoRemove: (id) => {
      dispatch(removeTodoServer(id));
    },
    onTodoToggle: (val, todo) => {
      dispatch(toggleTodoSelection(val, todo));
    },
    onToggleAll:(val) => {
      dispatch(toggleAllSelections(val));
    },
    onBulkDelete: () => {
      dispatch(bulkDeleteServer());
    }
  };
};

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList;
