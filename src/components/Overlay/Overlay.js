'use client';

import { useState, useEffect } from "react";
import styles from './Overlay.module.scss';


const Overlay = ({ children, closeFn, hideClose, background, fullscreen=true }) => {
    const [fadeOut, setFadeOut] = useState(false)

    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'unset';
        }
    }, [])

    const close = () => {
        setFadeOut(true)
        setTimeout(() => {
            closeFn()
        }, 500)
    }

    return (
        <div className={styles.overlay}>
            <div className={` ${styles.overlay__background} ${fadeOut && styles.fadeOut}`}>
            </div>
            <div className={`${styles.overlay__dialog} ${fadeOut ? styles.fadeOut : styles.fadeIn} ${fullscreen && styles.fullscreen}`} style={background ? { background } : {}}>
                {!hideClose && <div className={styles.overlay__close} onClick={close} >
                    <img src='assets/icons/close.svg' />
                </div>}
                {children}
            </div>

        </div>

    )
}

export default Overlay;