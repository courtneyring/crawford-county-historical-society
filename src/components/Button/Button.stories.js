
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
        children: 'Button',
        fn: () =>fn(),
    }

}

export const PrimaryWithUrl = {
    args: {
        variation: 'primary',
        children: 'Button',
        url: '/about'
    }
}

export const Secondary = {
    args: {
        variation: 'secondary',
        children: 'Button',
        fn: () =>fn(),
    }

}

export const Link = {
    args: {
        variation: 'link',
        children: 'Button',
        url: 'https://google.com',
        target: '_blank'
    }

}
