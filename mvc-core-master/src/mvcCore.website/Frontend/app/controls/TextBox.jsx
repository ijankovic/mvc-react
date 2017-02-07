import React, { Component, PropTypes } from 'react';
import {FormControl} from 'react-bootstrap';

class TextBox extends Component {
  constructor(props){
    super(props);
    this._handleChange = this._handleChange.bind(this);
    this.state = {
      value: this.props.value
    };
  }
  _handleChange(e){
    this.setState({
      value: e.target.value
    });
  }
  render() {
    return (
      <FormControl value={this.state.value} onChange={this._handleChange} onBlur={this.props.onUpdate} />
    );
  }
}

TextBox.propTypes = {
  value : PropTypes.string,
  onUpdate:PropTypes.func.isRequired
};

export default TextBox;
