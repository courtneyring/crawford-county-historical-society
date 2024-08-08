
import Button from '../Button/Button';
import Overlay from './Overlay';
import { createPortal } from 'react-dom';
import { useState } from 'react';

const items = [
    { title: 'This is a frequently asked question?', body: 'It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. ' },
    { title: 'This is another frequently asked question?', body: 'It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. ' },
    { title: 'This is the last frequently asked question?', body: 'It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. ' },
]

export default {
    title: 'Components/Overlay',
    component: Overlay,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
};



export const Primary = {
    render: () => {
        const [showOverlay, setShowOverlay] = useState()

        return (
            
            <>
                <Button text='Click to Open Portal' fn={() => setShowOverlay(true)}></Button>
                { showOverlay && createPortal(
                    <Overlay closeFn={() => setShowOverlay(false)}>
                        <h1>An Example Overlay</h1>
                        <p>lorem ipsum</p>
                    </Overlay >,
                    document.body
                )}
            </>
        )
    }
}
