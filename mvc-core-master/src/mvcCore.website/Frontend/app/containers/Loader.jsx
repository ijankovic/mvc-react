import React from 'react'
import { connect } from 'react-redux'
require('../../style/loader')

let Loader = ({ isLoading }) => {
    const className = isLoading ? 'loader' : 'loader invisible';
    return <div className={className}>Loading</div>
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading
    };
}

Loader = connect(mapStateToProps)(Loader);

export default Loader