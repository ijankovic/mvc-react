import React from 'react';

class DefaultCell extends React.Component {
  render() {
    return (<td className={this.props.className}>{this.props.children}</td>);
  }
}

export default DefaultCell;
