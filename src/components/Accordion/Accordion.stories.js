
import Accordion from './Accordion';
import { fn } from '@storybook/test';

const items = [
    { title: 'This is a frequently asked question?', body: 'It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. '},
    { title: 'This is another frequently asked question?', body: 'It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. '},
    { title: 'This is the last frequently asked question?', body: 'It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. '},
]

export default {
    title: 'Components/Accordion',
    component: Accordion,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
};



export const Primary = {
    render: () => {
        return (
            <div className='max-w-lg p-2'>
                <Accordion items={items} />
            </div>
            
        )
    }

}
