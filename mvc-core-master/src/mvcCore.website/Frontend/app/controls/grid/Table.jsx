import React, { Component } from 'react';
import {Row} from './Row.jsx';

const HEADER = 'header';
const DEFAULT = 'default';

class Table extends Component {
  constructor(props){
    super(props);
    this._calculateState = this._calculateState.bind(this);
    this._areColumnSettingsIdentical = this._areColumnSettingsIdentical.bind(this);
    this._populateColumnsAndColumnData = this._populateColumnsAndColumnData.bind(this);
    this._selectColumnElement = this._selectColumnElement.bind(this);
    this.state = this._calculateState(this.props);
    this._renderRows = this._renderRows.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.setState(this._calculateState(nextProps, this.state));
  }
  _updateColumn(rowIndex, propName, value)
    {
    this.props.onUpdate(rowIndex, propName, value);
  }
  _renderRows(){
    var self = this;
    var bodyRows = this.props.data.map(function (row, index) {
      return <Row columns={self.state.columns.bodyColumns} rowIndex={index} key={'row_key_' + index} currRowIndex={self.state.currRowIndex} />
    });

    var result = 
      {
        rows: bodyRows
      };
    return result;
  }
  _renderHeader(){
    return  <Row type='header' columns={this.state.columns.headerColumns} rowIndex={-1} key='header' />;
  }
  _renderEmptyRow(){
    var emptyTemplate = <tr><td colSpan={this.state.columnCount}>No data found</td></tr>;
        
    var result = {
      rows: emptyTemplate
    };
    return result;
  }
  _selectColumnElement(/*string*/ type, /*array*/ columns) /*array*/ {
    var newColumns = [];
    for (var i = 0; i < columns.length; ++i) {
      var column = columns[i];
      newColumns.push(React.cloneElement(
                column,
        {
          cell: type ?  column.props[type] : column.props[DEFAULT]
        }
            ));
    }
    return newColumns;
  }
  _areColumnSettingsIdentical(oldColumns, newColumns){ 
    if (oldColumns.length !== newColumns.length) {
      return false;
    }
    for (var index = 0; index < oldColumns.length; ++index) {
      if (!shallowEqual(oldColumns[index].props, newColumns[index].props)) {
        return false;
      }
    }
    return true;
  }
  _populateColumnsAndColumnData(columns, oldState)
    {
    let canReuseColumnSettings = false;
    if (oldState && oldState.columns) {
      canReuseColumnSettings = this._areColumnSettingsIdentical(columns, oldState.columns);
    }
    let columnInfo = {};
    if (canReuseColumnSettings) {
      columnInfo.headerColumns = oldState.headerColumns;
      columnInfo.bodyColumns = oldState.bodyColumns;
    } else {
      let headerColumns = this._selectColumnElement(HEADER, columns);
      columnInfo.headerColumns = headerColumns;
      columnInfo.bodyColumns = columns;
    }
    return columnInfo;
  }
  _calculateState(props, oldState){

    let children = [];
    React.Children.forEach(props.children, (child) => {
      if (child == null) {
        return;
      }
      children.push(child);
    });

    let columns = this._populateColumnsAndColumnData(children, oldState);
    let columnsCount = children? children.length : 0;

    let newState = {
      columns : columns,
      currRowIndex: 0,
      currColIndex: 0,
      columnCount: columnsCount
    };

    return newState;
  }
  render() {
    var header = this._renderHeader();
    console.log(this.props.data);
    var result = (this.props.data && this.props.data.size > 1)? this._renderRows() : this._renderEmptyRow();
		
    return (
                    <div className="table-responsive">
                        <table className="table table-hover ib-table">
                            <thead>{header}</thead>
                            <tbody>{result.rows}</tbody>
                        </table>
                    </div>
    );
  }
}

export default Table;