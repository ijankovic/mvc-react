import React, { Component } from 'react';

export class Modal extends Component {
  constructor(props) {
    super(props);
    this._close = this._close.bind(this);
    this._renderFooter = this._renderFooter.bind(this);
  }
  _close() {
    if (this.props.onClose) {
      this.props.onClose();
    }
  }
  _renderFooter() 
    {
    return (
            <div className='modal-footer'>
                <button type='button' className='btn btn-default close' onClick={this.props.onCancellation} >{this.props.cancelText}</button>
                <button type='button' className='btn btn-primary confirm' onClick={this.props.onConfirmation} >{this.props.confirmText}</button>
            </div>);
  }
  render() {
    var style = this.props.isOpen ? { display: 'block' } : { display: 'none' };
    var css = this.props.isOpen ? 'modal-backdrop fade in' : 'modal-backdrop fade out';
    return (
            <div>
                <div className={css} style={style}></div>
                <div role='dialog' tabIndex='-1' className='modal-result modal fade in' style={style}>
                    <div className='modal-dialog'>
                        <div className='modal-content'>
                            <div className='modal-header'>
                                <button type="button" className="close pull-right" onClick={this._close}>
                                    <span>&times;</span>
                                </button>
                                <h3 className='modal-title text-uppercase'>{this.props.title}</h3>
                            </div>
                            <div className='modal-body'>
                                <div className='text-center'>
                                    {this.props.children}
                                </div>
                            </div>
                            {this.props.onConfirmation && this._renderFooter()}
                        </div>
                    </div>
                </div>
            </div>
    );
  }
}
Modal.propTypes = {
  title: React.PropTypes.string.isRequired,
  onClose: React.PropTypes.func,
  onConfirmation: React.PropTypes.func,
  onCancellation: React.PropTypes.func,
  cancelText: React.PropTypes.string,
  confirmText: React.PropTypes.string
};
Modal.defaultProps = {
  cancelText: 'Cancel',
  confirmText: 'OK'
};