import React, { Component } from 'react';
import Immutable from 'immutable';
import DefaultCell from './DefaultCell.jsx';

export class Cell extends Component {
  constructor(props){
    super(props);
    this._renderCell = this._renderCell.bind(this);
  }
  _renderCell(cell, cellProps){
    var content = {};
    if (React.isValidElement(cell)) {
      content = React.cloneElement(cell, cellProps);
    } 
    else if (typeof cell === 'function') {
      content = cell(cellProps);
    } 
    else {
      content = (<DefaultCell {...cellProps} >{cell}</DefaultCell>);
    }
    return content;
  }
  render() {

    let other = Object.assign({}, this.props);
    delete other['cell'];
    var content = this._renderCell(this.props.cell, other);
    return (content);
  }
}
 