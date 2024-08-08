import { useState } from "react";
import './Overlay.scss';

const Overlay = ({ children, closeFn }) => {
    const [fadeOut, setFadeOut] = useState(false)

    const close = () => {
        setFadeOut(true)
        setTimeout(() => {
            closeFn()
        }, 500)
    }

    return (
        <>
            <div className={`w-screen h-screen  bg-translucent p-6 absolute top-0 left-0 overlay-container ${fadeOut && 'fadeOut'}`}>
            </div>
            <div className={`bg-lightgrey p-5 absolute overlay-dialog ${fadeOut ? 'fadeOut' : 'fadeIn'}`}>
                <div className="absolute top-5 right-5 w-7 cursor-pointer" onClick={close}>
                    <img src='/assets/icons/close.svg' />
                </div>
                {children}
            </div>

        </>

    )
}

export default Overlay;