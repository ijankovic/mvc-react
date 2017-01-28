import React, { PropTypes } from 'react'
import Todo from './Todo'
import Immutable from 'immutable'
import { ButtonGroup, Table } from 'react-bootstrap'
import Filter from '../components/Filter'


const TodoList = ({ todos, onTodoComplete, onTodoRemove }) => {
    const items = todos.map(todo => (
        <Todo 
            key={todo.id}
            todo={todo}
            onComplete={() => onTodoComplete(todo)}
            onRemove={() => onTodoRemove(todo.id)}
        />
    ));
 
    return (
        <Table striped hover>
            <thead>
                <tr>
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
    );   
}

TodoList.propTypes = {
    todos: PropTypes.instanceOf(Immutable.List),
    onTodoComplete: PropTypes.func.isRequired,
    onTodoRemove: PropTypes.func.isRequired
}

export default TodoList