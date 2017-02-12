import { connect } from 'react-redux';
import { updateTodo, removeTodoServer, toggleTodoSelection, toggleAllSelections, loadTodos } from '../actions/todos';
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
  const {pager, filter, todos, visibilityFilter} = state;
  const { page, pageSize, total } = pager;
  const {users} = filter;
  let visibleTodos = getVisibleTodos(todos, visibilityFilter);
  let hasMore = (total > (page * pageSize));

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
    onTodoSelect: (id, isSelected) => {
      dispatch(toggleTodoSelection(id, isSelected));
    },
    onToggleAll:(val) => {
      dispatch(toggleAllSelections(val));
    },
    loadMore: (page) => {
      dispatch(loadTodos(Const.pager.PAGE_SIZE, page));
    }
  };
};

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList;
