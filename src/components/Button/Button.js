'use client';

import Link from 'next/link';
import styles from './Button.module.scss';

const Button = ({ children, fn, url, target, hollow=false, variation='primary', textDecoration }) => {

    const Tag = url ? Link : 'button';

    return (

        <Tag
            href={url}
            onClick={() =>fn()}
            target={target}
            className={`${styles.button} ${hollow ? styles.hollow : styles.filled} ${styles[variation]}`}
            style={{textDecoration}}
        >
            {children}
        </Tag>


    )
}

export default Button;