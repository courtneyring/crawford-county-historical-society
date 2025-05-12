'use client';

import React, { useEffect } from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';

const wrapper = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    padding: '16px 20px',
    margin: '0px',
    border: '2px solid rgb(223, 223, 227)',
    borderRadius: '0px 5px 5px',
    outline: '0px',
    boxShadow: 'none',
    backgroundColor: 'rgb(255, 255, 255)',
    transition: 'border-color 0.2s ease 0s',
    position: 'relative',
    fontSize: '15px',
};

const button = {
    marginLeft: '1em',
    display: 'block',
    border: '0px',
    cursor: 'pointer',
    height: '27px',
    lineHeight: '27px',
    fontSize: '12px',
    fontWeight: 600,
    borderRadius: '3px',
    padding: '0px 14px',
    backgroundColor: 'rgb(121, 130, 145)',
    color: 'rgb(255, 255, 255)',
    marginRight: '8px',
};

export const Control = ({value, onChange }) => {

    const mapValues = (val) => {
        let v = {...value, val};
    }

    return (
        <>

        </>
    )

};

Control.propTypes = {
    onChange: PropTypes.func.isRequired,
    forID: PropTypes.string,
    value: PropTypes.node,
    classNameWrapper: PropTypes.string.isRequired,
};

Control.defaultProps = {
    value: '',
};

