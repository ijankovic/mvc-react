import React, { Component, PropTypes } from 'react';
import {FormControl} from 'react-bootstrap';
import { NameIdRecord } from '../models/NameIdRecord';
import Immutable from 'immutable';

class DropDown2 extends Component {

  render() {
    return (
            <div>
                <FormControl onSelect={this.props.onUpdate} />
            </div>
      );
  }
}

DropDown2.propTypes = {
  options: PropTypes.instanceOf(NameIdRecord),
  onUpdate: PropTypes.func.isRequired
};

export default DropDown2;