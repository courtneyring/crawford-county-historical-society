
import Accordion from './Accordion';
import { fn } from '@storybook/test';

export default {
    title: 'Components/Accordion',
    component: Accordion,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};



export const Primary = {
    args: {
        variation: 'primary',
        text: 'Button',
        fn: () => fn(),
    }

}
