
import Button from './Button';
import { fn } from '@storybook/test';

export default {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};



export const Primary = {
    args: {
        variation: 'primary',
        text: 'Button',
        fn: () =>fn(),
    }

}

export const Secondary = {
    args: {
        variation: 'secondary',
        text: 'Button',
        fn: () =>fn(),
    }

}

export const Link = {
    args: {
        variation: 'link',
        text: 'Button',
        url: 'https://google.com',
        target: '_blank'
    }

}
