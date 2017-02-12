import React from 'react';
import CustomModal from '../../controls/CustomModal';
import Link from '../components/Link';
import { Button, Glyphicon } from 'react-bootstrap';

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
            <CustomModal title={this.props.title} children={this.props.children} isOpen={this.state.isOpen} onClose={this._close} onConfirm={() => {this._close();  this.props.onConfirm(); }} />
            <Button bsStyle={this.props.style} disabled={this.props.disabled} onClick={this._open}><Glyphicon glyph={this.props.glyph} /> {this.props.btnText}</Button>
        </div>
    );
  }
}
export default Alert;