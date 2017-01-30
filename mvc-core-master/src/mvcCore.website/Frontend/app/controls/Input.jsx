﻿//TODO: import styles if any
import React from 'react';

export class Input extends React.Component {
  constructor(props) {
    super(props);
    this._update = this._update.bind(this);
  }
  _update(event) {
    if (this.props.onCustomAction) {
      this.props.onCustomAction(event, this.props, event.target.value);
    }
    else {
      this.props.onUpdate(this.props.name,event.target.value);
    }
  }
  render() {
    let props = _.omit(this.props, ['onupdate', 'onCustomAction', 'value']);
    return (
            <div className='form-group'>
                
                {this.props.label && <label htmlFor={this.props.name}>{this.props.label}</label>}
                <input
                    {... props}
                    type='text'
                    className={this.props.className || 'form-control'}
                    value={this.props.value || ''}
                    onChange={this._update}
                    onBlur={this._update} />
            </div>
    );
  }
}

Input.propTypes = {
  name: React.PropTypes.string.isRequired
};