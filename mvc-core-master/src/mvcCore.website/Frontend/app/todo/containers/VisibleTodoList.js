import { connect } from 'react-redux';
import { updateTodo, removeTodoServer, toggleTodoSelection, toggleAllSelections, loadAllTodosServer } from '../actions/todos';
import TodoList from '../components/TodoList';
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
  const {page, pageSize, users, todos, visibilityFilter} = state;
  let visibleTodos = getVisibleTodos(todos, visibilityFilter);
  let hasMore = (visibleTodos.size > ((page + 1 ) * pageSize));

  return {
    visibleTodos,
    users,
    page,
    pageSize,
    hasMore
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoUpdate: (id, val, todo) => {
      dispatch(updateTodo(id, val, todo));
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
    loadMore: () => {
      dispatch(loadAllTodosServer());
    }
  };
};

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList;
