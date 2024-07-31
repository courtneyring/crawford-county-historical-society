
import Hero from './Hero';
import copy from '@/../.storybook/assets/example-copy.json';

export default {
    title: 'Components/Hero',
    component: Hero,
    parameters: {
        layout: 'full',
    },
    tags: ['autodocs'],
};


// const Template = (args) => <Hero {...args} />;


export const Default = {
    args: {
        text: 'Crawford County <br> Historical Society',
        image: 'hero.png',
        skinny: false
    }

}

export const Skinny  = {
    args: {
        image: 'hero.png',
        skinny: true
    }
    
}
