
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



export const PrimaryFilled = {
    args: {
        variation: 'primary',
        hollow: false,
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

export const SecondaryHollowWithFn = {
    args: {
        variation: 'secondary',
        hollow: true,
        children: 'Button',
        fn: () =>fn(),
    }

}
export const NeutralDark = {
    args: {
        variation: 'neutralDark',
        hollow: true,
        children: 'Button',
        fn: () =>fn(),
    }

}
export const NeutralFilled = {
    args: {
        variation: 'neutralDark',
        hollow: false,
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
