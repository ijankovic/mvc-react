import React from 'react'
import FilterLink from '../containers/FilterLink'
import Const from '../utilities/constants'
import { ButtonGroup } from 'react-bootstrap'

const Filter = () => (
    <div>
        <span>Show: </span>
        <ButtonGroup>
            <FilterLink filter={Const.visibility.SHOW_ALL}>All</FilterLink>
            <FilterLink filter={Const.visibility.SHOW_ACTIVE}>Active</FilterLink>
            <FilterLink filter={Const.visibility.SHOW_COMPLETED}>Completed</FilterLink>
        </ButtonGroup>
    </div>
)

export default Filter