import React, { PropTypes } from 'react';
import Todo from './Todo';
import Immutable from 'immutable';
import { Table, Checkbox, Glyphicon } from 'react-bootstrap';
import TodoListFilter from '../components/TodoListFilter';
import NameIdRecord from '../../controls/models/NameIdRecord';
import InfiniteScroll from '../../controls/InfiniteScroll';
import HeaderActionBar from '../containers/HeaderActionBar';


const TodoList = ({ visibleTodos, users, page, hasMore, loadMore, onTodoUpdate, onTodoRemove, onTodoToggle, onTodoSelect, onToggleAll }) => {
  const items = visibleTodos.map(todo => (
        <Todo
            key={todo.id}
            todo={todo}
            users={users}
            toggleSelection={onTodoToggle}
            onUpdate={onTodoUpdate}
            onSelected={onTodoSelect}
            onComplete={() => onTodoUpdate(todo.id, 'isCompleted', !todo.isCompleted)}
            onRemove={() => onTodoRemove(todo.id)}
            />
    ));
  const emptyRow = <tr><td>No data</td></tr>;
  return (
        <div className='area-container'>
            <h5 className='uppercase'>Tasks</h5>
            <div className='filter-container'>
                <nav className="navbar navbar-default navbar-container">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li><TodoListFilter className='action-filter-container' /></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li><HeaderActionBar /></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <InfiniteScroll pageStart={page} hasMore={hasMore} loadMore={loadMore}>
                    <Table className="table table-hover table-responsive">
                         <thead className="table-header">
                            <tr>
                                <th className='col-md-1'><Checkbox onChange={(e) => onToggleAll(e.target.checked)} /></th>
                                <th className='col-md-1'>Id</th>
                                <th className='col-md-1'>Done</th>
                                <th className='col-md-8'>Text</th>
                                <th className='col-md-8'>Assigned</th>
                                <th className='col-md-2'></th>
                                <th className='col-md-2'></th>
                            </tr>
                        </thead>
                        <tbody>{items.size == 0? emptyRow : items}</tbody>
                    </Table>
                </InfiniteScroll>
            </div>
        </div>
    );
};

TodoList.propTypes = {
  visibleTodos: PropTypes.instanceOf(Immutable.List),
  users: PropTypes.arrayOf(PropTypes.instanceOf(NameIdRecord)),
  onTodoUpdate: PropTypes.func.isRequired,
  onTodoRemove: PropTypes.func.isRequired,
  onTodoToggle: PropTypes.func.isRequired
};


export default TodoList;