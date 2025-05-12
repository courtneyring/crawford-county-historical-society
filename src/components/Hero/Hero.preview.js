import PropTypes from 'prop-types';
import React from 'react';
import './Hero.module.scss';
import Hero from './Hero';

const Preview = ({ value, getAsset }) => {
    const [image, pos] = value.split(' | ')
    console.log(image, pos)
    return (
        <>
            {value && <Hero image={image} pos={pos} />}
        </>

    )
}

Preview.propTypes = {
    value: PropTypes.node,
};

export default Preview;