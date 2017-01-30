import React, { PropTypes } from 'react';
import Immutable from 'immutable';
import { Checkbox } from 'react-bootstrap';
import Table from '../../controls/grid/Table';
import DefaultCell from '../../controls/grid/DefaultCell.jsx';
import HeaderCell from '../../controls/grid/HeaderCell.jsx';

const TodoList2 = ({ todos, onTodoComplete, onTodoRemove, onToggleAll }) => {
  return (
        <Table data={todos.toArray()} >
            <div
                header={<HeaderCell><Checkbox onChange={onToggleAll} /></HeaderCell>}
                default={<DefaultCell><Checkbox /></DefaultCell>} />
            <div
                header={<HeaderCell><span>Text</span></HeaderCell>}
                default={({rowIndex}) => (<DefaultCell><span>{todos[rowIndex]['text']}</span></DefaultCell>)} />

            <div default={({rowIndex}) => (<DefaultCell>
                <div className='ib-list-group-actions pull-right'>
                    <Link onClick={() => onTodoComplete(todos[rowIndex])}>'Complete'</Link>
                </div>
            </DefaultCell>)} />

            <div default={({rowIndex}) => (<DefaultCell>
                <div className='ib-list-group-actions pull-right'>
                    <Link onClick={() => onTodoRemove(todos[rowIndex]['id'])}>'Remove'</Link>
                </div>
            </DefaultCell>)} />
        </Table>
    );
};

TodoList2.propTypes = {
  todos: PropTypes.instanceOf(Immutable.List),
  onTodoComplete: PropTypes.func.isRequired,
  onTodoRemove: PropTypes.func.isRequired
};

export default TodoList2;