import React, { PropTypes } from 'react';
import Alert from '../containers/Alert';

const ActionBar = ({disableDelete, disableSave, selectedCount, modifiedCount, total, onBulkDelete, onSave }) => {
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
            <span className='pull-right'>
                <span>Modified {modifiedCount} / {total} </span>
            </span>       
        </div>
    );
};

ActionBar.propTypes = {
  disableDelete: PropTypes.bool.isRequired,
  disableSave: PropTypes.bool.isRequired,
  selectedCount:PropTypes.number.isRequired,
  modifiedCount: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  onBulkDelete: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired
};

export default ActionBar;