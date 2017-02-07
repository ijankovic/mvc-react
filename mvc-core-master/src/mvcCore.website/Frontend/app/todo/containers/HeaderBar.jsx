import { connect } from 'react-redux';
import { bulkDeleteServer, saveServer } from '../actions/todos';

import TodoActionBar from '../components/TodoActionBar';

const mapStateToProps = (state) => {
  let selectedCount = state.todos.filter(x => x.isSelected === true).size;
  let modifiedCount = state.todos.filter(x => x.isDirty === true).size;


  return {
    selectedCount: selectedCount,
    total: state.todos.count(),
    disableDelete: selectedCount === 0,
    disableSave: modifiedCount === 0
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    onBulkDelete: () => {
      dispatch(bulkDeleteServer());
    },
    onSave: () => {
      dispatch(saveServer());
    }
  };
};

const HeaderBar = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoActionBar);


export default HeaderBar;