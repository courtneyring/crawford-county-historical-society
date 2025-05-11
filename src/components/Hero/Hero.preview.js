import PropTypes from 'prop-types';
import React from 'react';
import './Hero.module.scss';
import Hero from './Hero';

const Preview = ({ value, getAsset }) => {
    console.log(value)
    return (
        <>
            {value && <Hero image={value.image} pos={value.pos} />}
        </>

    )
}

Preview.propTypes = {
    value: PropTypes.node,
};

export default Preview;