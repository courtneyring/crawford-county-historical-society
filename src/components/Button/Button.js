'use client';

import Link from 'next/link';
import styles from './Button.module.scss';

const Button = ({ children, fn, url, target, variation='primary' }) => {

    return (
        <>
            {url ?
                <Link
                    href={url}
                    target={target}
                    className={`${styles.button} ${styles[variation]}`}
                >
                    {children}
                </Link>
                :
                <button
                    className={`${styles.button} ${styles[variation]}`}
                    onClick={() => fn()}
                >
                    {children}
                </button>
            }
        </>

    )
}

export default Button;