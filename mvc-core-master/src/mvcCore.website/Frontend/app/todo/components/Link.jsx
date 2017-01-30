import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';

const Link = ({ active, canClick = true, children, onClick }) => {
  return (
        <Button  
            className='btn btn-link'
            active={active}
            disabled={!canClick}                  
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
  canClick: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Link;