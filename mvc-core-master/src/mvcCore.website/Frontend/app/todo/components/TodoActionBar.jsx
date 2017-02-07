import React, { PropTypes } from 'react';
import Alert from '../containers/Alert';

const TodoActionBar = ({disableDelete, disableSave, selectedCount, total, onBulkDelete, onSave }) => {
  return (
        <div>
            <Alert title='Bulk delete' onConfirm={onBulkDelete} disabled={disableDelete} btnText='Bulk Delete'>
                <div>
                    <h4>Are you sure you want to delete selected records?</h4>
                </div>
            </Alert>
            <Alert title='Save' onConfirm={onSave} disabled={disableSave} btnText='Save Changes'>
                <div>
                    <h4>Are you sure you want to apply changes to selected records?</h4>
                </div>
            </Alert>
            <span className='pull-right'>
                <span>Selected {selectedCount} / {total} </span>
            </span>            
        </div>
    );
};

TodoActionBar.propTypes = {
  disableDelete: PropTypes.bool.isRequired,
  disableSave: PropTypes.bool.isRequired,
  selectedCount:PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  onBulkDelete: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired
};

export default TodoActionBar;