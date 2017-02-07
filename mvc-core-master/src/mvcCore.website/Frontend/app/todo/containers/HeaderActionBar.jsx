import { connect } from 'react-redux';
import { bulkDeleteServer, saveServer } from '../actions/todos';

import ActionBar from '../components/ActionBar';

const mapStateToProps = (state) => {
  let selectedCount = state.todos.filter(x => x.isSelected === true).size;
  let modifiedCount = state.todos.filter(x => x.isDirty === true).size;

  return {
    selectedCount: selectedCount,
    modifiedCount: modifiedCount,
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

const HeaderActionBar = connect(
    mapStateToProps,
    mapDispatchToProps
)(ActionBar);


export default HeaderActionBar;