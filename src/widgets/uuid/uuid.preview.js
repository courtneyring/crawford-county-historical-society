import PropTypes from 'prop-types';
import React from 'react';

const Preview = ({ value, getAsset }) => {
    return (
        <div>Preview.jsx, {value}</div>
    )
}

Preview.propTypes = {
    value: PropTypes.node,
};

export default Preview;