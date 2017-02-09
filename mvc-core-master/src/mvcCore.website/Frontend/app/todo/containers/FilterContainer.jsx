import React from 'react';
import {connect} from 'react-redux';
import Const from '../utilities/constants';
import Filter from '../components/Filter';
import {loadTodos, updateFilter} from '../actions/todos';

const mapStateToProps = (state) => {
  const {filter} = state;
  return {
    data: filter
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdate: (name, value) => {
      dispatch(updateFilter(name, value));
    },
    onFilter:() => {
      dispatch(loadTodos(Const.pager.PAGE_SIZE, Const.pager.PAGE));
    }
  };
};

const FilterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Filter);

export default FilterContainer;