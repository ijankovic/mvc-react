import React, { PropTypes } from 'react';
import TodoRecord from '../models/todoRecord';
import Link from './Link';
import { Checkbox } from 'react-bootstrap';
import { Glyphicon } from 'react-bootstrap';

const Todo = ({ onComplete, onRemove, todo, toggleSelection }) => {
   
  const completeText = !todo.isCompleted ? 'Complete' : 'Reopen';
  const checkMark = todo.isCompleted ? <Glyphicon className='text-success' glyph='ok'/> : null;

  return (
        <tr key={'todo-' + todo.id}>
            <td><Checkbox checked={todo.isSelected} onChange={(e) => {toggleSelection(e.target.checked, todo);}} /></td>
            <td>{todo.id}</td>
            <td>{checkMark}</td>
            <td>{todo.text}</td>
            <td>
                <Link onClick={onComplete}>{completeText}</Link>
                <Link onClick={onRemove}>Remove</Link>
            </td>            
        </tr>
  );
};

Todo.propTypes = {
  onComplete: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  toggleSelection: PropTypes.func.isRequired,
  todo: PropTypes.instanceOf(TodoRecord),
};

export default Todo;