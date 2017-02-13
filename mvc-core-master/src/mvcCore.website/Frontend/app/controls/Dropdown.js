import React, { PropTypes } from 'react';
import Immutable from 'immutable';

export const Dropdown = ({ value, onChange, options, name, label, disabled, parentKey, defaultText }) => (

  <div>
      <label htmlFor={name}>{label}</label>
      <select key={'select_'+ parentKey} onChange={e => e.target.value === '-1'? onChange(name, null) :  onChange(name, e.target.value)} disabled={disabled} className='form-control' value={value}>
          
          {options && <option value={-1} key={-1}> {defaultText}</option>}
          {options && options.map(option => <option value={option.id} key={parentKey + '_' + option.id}>{option.name}</option>)}

      </select>
    </div>
);

Dropdown.propTypes = {
  options: PropTypes.instanceOf(Immutable.List),
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

Dropdown.defaultProps = {
  defaultText:PropTypes.string,
  disabled: false
};