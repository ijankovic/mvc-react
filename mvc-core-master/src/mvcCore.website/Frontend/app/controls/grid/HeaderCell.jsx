import React from 'react';

class HeaderCell extends React.Component {
  render() {
    return (<th className={this.props.className}>{this.props.children}</th>);
  }
}

export default HeaderCell;