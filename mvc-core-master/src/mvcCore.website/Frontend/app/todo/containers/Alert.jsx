import React from 'react';
import Modal2 from '../../controls/Modal2';
import Link from '../components/Link';

class Alert extends React.Component {
  constructor(props) {
    super(props);

    this._close = this._close.bind(this);
    this._open = this._open.bind(this);
        
    this.state = {
      isOpen: false
    };
  }
    
  _close() {
    this.setState({ isOpen: false });
  }
  _open(){
    this.setState({ isOpen: true });
  }
    
  render() {     
    return (
        <div>
            <Modal2 title={this.props.title} children={this.props.children} isOpen={this.state.isOpen} onClose={this._close} onConfirm={() => {this._close();  this.props.onConfirm(); }} />
            <Link disabled={this.props.disabled} onClick={this._open}>{this.props.btnText}</Link>
        </div>
    );
  }
}
export default Alert;