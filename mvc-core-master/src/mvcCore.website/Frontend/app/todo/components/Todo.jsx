import React, { PropTypes } from 'react';
import TodoRecord from '../models/todoRecord';
import Link from './Link';
import { Checkbox } from 'react-bootstrap';
import { Glyphicon } from 'react-bootstrap';
import TextBox from '../../controls/TextBox';
import {Dropdown } from '../../controls/Dropdown';
import {NameIdRecord } from '../../controls/models/NameIdRecord';

const Todo = ({todo, users, onComplete, onRemove, onUpdate }) => {
   
  const completeText = !todo.isCompleted ? 'Complete' : 'Reopen';
  const checkMark = todo.isCompleted ? <Glyphicon className='text-success' glyph='ok'/> : null;
  return (
        <tr key={'todo-' + todo.id}>
            <td><Checkbox checked={todo.isSelected} onChange={(e) => {onUpdate(todo.id, 'isSelected',e.target.checked);}} /></td>
            <td>{todo.id}</td>
            <td>{checkMark}</td>
            <td><TextBox value={todo.text} onUpdate={(e) => {onUpdate(todo.id, 'text', e.target.value);}} /></td>
            <td><Dropdown defaultText='N/A' parentKey={'todo_'+ todo.id} name='userId' options={users} value={todo.userId} onChange={(name, val) => {onUpdate(todo.id, name, val);}} /></td>
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
  onUpdate: PropTypes.func.isRequired,
  todo:  PropTypes.instanceOf(TodoRecord),
  users: PropTypes.arrayOf(PropTypes.instanceOf(NameIdRecord))
};

export default Todo;