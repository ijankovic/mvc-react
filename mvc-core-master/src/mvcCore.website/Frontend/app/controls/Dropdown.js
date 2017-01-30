import React, { PropTypes } from 'react';

export const Dropdown = ({ value, onChange, options, name, label, disabled }) => (
  <div className='form-group'>
      <label htmlFor={name}>{label}</label>

      <select onChange={e => onChange(name, e.target.value)} disabled={disabled} className='form-control' value={value}>
          {
            options && options.map(option =>
                <option value={option.Value} key={option.Value}>
                  {option.Text}
                </option>)
          }
      </select>
    </div>
);

Dropdown.propTypes = {
  options: PropTypes.arrayOf(
      PropTypes.shape({
        Value: PropTypes.any.isRequired,
        Text: PropTypes.string.isRequired
      })
    ).isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

Dropdown.defaultProps = {
  options: [],
  disabled: false
};