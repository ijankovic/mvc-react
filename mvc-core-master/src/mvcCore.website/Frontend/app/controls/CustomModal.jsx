
import React, {PropTypes} from 'react';
import { Modal, Button } from 'react-bootstrap';

const CustomModal = ({title, isOpen, onClose, onConfirm, children, confirmText='Ok', cancelText='Cancel', dialogClassName = 'custom-modal'}) => {
  return (
        <Modal
            show={isOpen}
            onHide={onClose}
            dialogClassName={dialogClassName}
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-lg">{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    {children}
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onClose}>{cancelText}</Button>
                <Button onClick={onConfirm} bsStyle="primary">{confirmText}</Button>
            </Modal.Footer>
        </Modal>
  );
};

CustomModal.propTypes = {
  title: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired
};

export default CustomModal;