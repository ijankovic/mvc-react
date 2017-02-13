import React, { PropTypes } from 'react';
import Alert from '../containers/Alert';
import { Badge } from 'react-bootstrap';

const ActionBar = ({disableDelete, disableSave, selectedCount, modifiedCount, onBulkDelete, onSave }) => {
  return (
        <div className='box2'>
                <span>
                    Selected <Badge>{selectedCount}</Badge>
                </span>
                <span>
                    Updated <Badge>{modifiedCount}</Badge>
                </span>
                <Alert title='Bulk delete' onConfirm={onBulkDelete} disabled={disableDelete} btnText='Delete' glyph='remove' style='danger'>
                    <div>
                        <h4>Are you sure you want to delete selected records?</h4>
                    </div>
                </Alert>
                <Alert title='Save' onConfirm={onSave} disabled={disableSave} btnText='Save' glyph='glyphicon glyphicon-floppy-disk' style='warning'>
                    <div>
                        <h4>Are you sure you want to apply changes to selected records?</h4>
                    </div>
                </Alert>
        </div>
    );
};

ActionBar.propTypes = {
  disableDelete: PropTypes.bool.isRequired,
  disableSave: PropTypes.bool.isRequired,
  selectedCount: PropTypes.number.isRequired,
  modifiedCount: PropTypes.number.isRequired,
  onBulkDelete: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired
};

export default ActionBar;