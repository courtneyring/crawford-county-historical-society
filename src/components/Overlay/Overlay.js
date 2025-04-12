'use client';

import { useState } from "react";
import styles from './Overlay.module.scss';


const Overlay = ({ children, closeFn, hideClose, background }) => {
    const [fadeOut, setFadeOut] = useState(false)

    const close = () => {
        setFadeOut(true)
        setTimeout(() => {
            closeFn()
        }, 500)
    }

    return (
        <>
            <div className={` ${styles.overlay__background} ${fadeOut && styles.fadeOut}`}>
            </div>
            <div className={`${styles.overlay__dialog} ${fadeOut ? styles.fadeOut : styles.fadeIn}`} style={background ? { background } : {}}>
                {!hideClose && <div className={styles.overlay__close} onClick={close} >
                    <img src='assets/icons/close.svg' />
                </div>}
                {children}
            </div>

        </>

    )
}

export default Overlay;