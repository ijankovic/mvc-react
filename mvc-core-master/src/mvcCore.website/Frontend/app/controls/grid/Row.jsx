import React, { Component } from 'react';
import {Cell} from './Cell';

var DEFAULT = 'default';

export class Row extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var rowIndex = this.props.rowIndex;
    var type = this.props.type || DEFAULT;
    var columns = this.props.columns.map(function (col, index) {
      var key = 'cell_' + index;
      var cellTemplate = col.props[type];
      var props = {
        colIndex: index,
        rowIndex: rowIndex
      };

      return (<Cell key={key} {...props} cell={cellTemplate} />);

    });
    return (<tr>{columns}</tr>);
  }
}
