import React from 'react';
import FilterLink from '../containers/FilterLink';
import Const from '../utilities/constants';
import { ButtonGroup } from 'react-bootstrap';

const TodoListFilter = (props) => (
    <div className={props.className}>
        <ButtonGroup>
            <FilterLink filter={Const.visibility.SHOW_ALL}>All</FilterLink>
            <FilterLink filter={Const.visibility.SHOW_ACTIVE}>Active</FilterLink>
            <FilterLink filter={Const.visibility.SHOW_COMPLETED}>Completed</FilterLink>
        </ButtonGroup>
    </div>
);

export default TodoListFilter;