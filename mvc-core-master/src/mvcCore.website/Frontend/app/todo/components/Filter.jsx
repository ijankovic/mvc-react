import React, { PropTypes } from 'react';
import FilterRecord from '../models/filterRecord';
import { Dropdown } from '../../controls/Dropdown';
import { Row, Col, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

const Filter = ({data, onFilter, onUpdate}) => {
  return (
        <div className='area-container'>
            <h5 className='uppercase'>Filter Area</h5>
            <div className='filter-container'>
                <Row className="show-grid">
                    <Col xs={10}>
                        <Dropdown defaultText='All' label='Owner' name='userId' value={data.userId} options={data.users} onChange={(name, val) => {onUpdate(name, val);}} /> 
                    </Col>
                    <Col xs={2}>
                        <FormGroup controlId="formInlineName">
                            <ControlLabel>&nbsp;</ControlLabel>
                            <FormControl className="primary" label='sdf' value='Search' type="button" onClick={onFilter} />
                        </FormGroup>
                    </Col>
                </Row>     
            </div>
        </div>
  );
};

Filter.propTypes = {
  data: PropTypes.instanceOf(FilterRecord),
  onFilter: PropTypes.func.isRequired,
  onUpdate:PropTypes.func.isRequired,
};

export default Filter;