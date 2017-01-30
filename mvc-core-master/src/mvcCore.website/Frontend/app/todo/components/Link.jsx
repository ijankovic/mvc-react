import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';

const Link = ({ active, disabled = false, children, onClick }) => {
  return (
        <Button  
            className='btn btn-link'
            active={active}
            disabled={disabled}                  
            onClick={e => {
              e.preventDefault();
              onClick();
            }} >
            {children}
        </Button>
  );
};

Link.propTypes = {
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Link;