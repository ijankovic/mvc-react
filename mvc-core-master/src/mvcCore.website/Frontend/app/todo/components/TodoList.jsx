import React, { PropTypes } from 'react';
import Todo from './Todo';
import Immutable from 'immutable';
import { ButtonGroup, Table, Checkbox } from 'react-bootstrap';
import Filter from '../components/Filter';
import Link from './Link';

const TodoList = ({ todos, selectedCount, total, onTodoComplete, onTodoRemove, onTodoToggle, onToggleAll, onBulkDelete }) => {
  const items = todos.map(todo => (
        <Todo
            key={todo.id}
            todo={todo}
            toggleSelection={onTodoToggle}
            onComplete={() => onTodoComplete(todo)}
            onRemove={() => onTodoRemove(todo.id)}
            />
    ));

  return (
    <div>
        <span className='pull-right'>
            <span>Selected {selectedCount} / {total} </span>
            <span><Link disabled={selectedCount == 0} onClick={onBulkDelete}>Bulk Delete</Link></span>
        </span>
        <Table striped hover>
            <thead>
                <tr>
                    <th className='col-md-1'><Checkbox onChange={(e) => onToggleAll(e.target.checked)} /></th>
                    <th className='col-md-1'>Id</th>
                    <th className='col-md-1'>Done</th>
                    <th className='col-md-8'>Text</th>
                    <th className='col-md-2'></th>
                </tr>
            </thead>
            <tbody>{items}</tbody>
            <tfoot>
                <tr>
                    <td colSpan='4'>
                        <Filter />
                    </td>
                </tr>
            </tfoot>
        </Table>
    </div>
    );
};




TodoList.propTypes = {
  todos: PropTypes.instanceOf(Immutable.List),
  onTodoComplete: PropTypes.func.isRequired,
  onTodoRemove: PropTypes.func.isRequired,
  onTodoToggle: PropTypes.func.isRequired
};


export default TodoList;