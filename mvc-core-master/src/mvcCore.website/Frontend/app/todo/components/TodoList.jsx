import React, { PropTypes } from 'react';
import Todo from './Todo';
import Immutable from 'immutable';
import { Table, Checkbox } from 'react-bootstrap';
import Filter from '../components/Filter';
import NameIdRecord from '../../controls/models/NameIdRecord';
import InfiniteScroll from '../../controls/InfiniteScroll';


const TodoList = ({ visibleTodos, users, page, hasMore, loadMore, onTodoUpdate, onTodoRemove, onTodoToggle, onToggleAll }) => {
  const items = visibleTodos.map(todo => (
        <Todo
            key={todo.id}
            todo={todo}
            users={users}
            toggleSelection={onTodoToggle}
            onUpdate={onTodoUpdate}
            onComplete={() => onTodoUpdate(todo.id, 'isCompleted', !todo.isCompleted)}
            onRemove={() => onTodoRemove(todo.id)}
            />
    ));
  return (
        <div>
            <Filter />
            <InfiniteScroll pageStart={page} hasMore={hasMore} loadMore={loadMore}>
                <Table striped hover>
                    <thead>
                        <tr>
                            <th className='col-md-1'><Checkbox onChange={(e) => onToggleAll(e.target.checked)} /></th>
                            <th className='col-md-1'>Id</th>
                            <th className='col-md-1'>Done</th>
                            <th className='col-md-8'>Text</th>
                            <th className='col-md-8'>Assigned</th>
                            <th className='col-md-2'></th>
                        </tr>
                    </thead>
                    <tbody>{items}</tbody>
                </Table>
            </InfiniteScroll>
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