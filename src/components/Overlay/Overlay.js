'use client';

import { useState } from "react";
import styles from './Overlay.module.scss';
import { imagePath } from "@/utils/imagePrefix";

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
            <div className={`w-screen h-screen  bg-translucent p-6 absolute top-0 left-0 ${styles['overlay-container']} ${fadeOut && styles.fadeOut}`}>
            </div>
            <div className={`${background ?? 'bg-lightgrey'} p-5 absolute ${styles['overlay-dialog']} ${fadeOut ? styles.fadeOut : styles.fadeIn}`}>
                {!hideClose && <div className="absolute top-5 right-5 w-7 cursor-pointer" onClick={close} >
                    <img src={imagePath(`assets/icons/close.svg`)} />
                </div>}
                {children}
            </div>

        </>

    )
}

export default Overlay;