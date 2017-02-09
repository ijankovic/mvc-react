import React, { PropTypes } from 'react';

export const Dropdown = ({ value, onChange, options, name, label, disabled, parentKey, defaultText }) => (

  <div className='form-group'>
      <label htmlFor={name}>{label}</label>
      <select key={'select_'+ parentKey} onChange={e => onChange(name, e.target.value)} disabled={disabled} className='form-control' value={value}>
          
          {options && <option value={-1} key={-1}> {defaultText}</option>}
          {options && options.map(option => <option value={option.id} key={parentKey + '_' + option.id}>{option.name}</option>)}

      </select>
    </div>
);

Dropdown.propTypes = {
  options: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.any.isRequired,
        name: PropTypes.string.isRequired
      })
    ).isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

Dropdown.defaultProps = {
  options: [],
  defaultText:PropTypes.string,
  disabled: false
};