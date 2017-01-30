//TODO: import styles if any
import React from 'react';

export class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this._update = this._update.bind(this);
  }
  _update(event) {
    this.props.onCustomAction 
            ? this.props.onCustomAction(event, this.props, event.target.checked)
            : this.props.onUpdate(this.props.name,event.target.checked);
  }
  render() {
    let props = _.omit(this.props, ['onupdate', 'onCustomAction', 'value']);
    return (
            <div className='form-group'>
                {this.props.label && <label htmlFor={this.props.name}>{this.props.label}</label>}
                
                <input {... props}
                    type='checkbox'
                    className={this.props.className || 'form-control'}
                    value={this.props.value || ''}
                    onChange={this._update} />
            </div>
    );
  }
}

Checkbox.propTypes = {
  name: React.PropTypes.string.isRequired
};