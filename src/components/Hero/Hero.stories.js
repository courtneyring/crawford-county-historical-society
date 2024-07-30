
import Hero from './Hero';
import copy from '@/../.storybook/assets/example-copy.json';

export default {
    title: 'Components/Hero',
    component: Hero,
    parameters: {
        layout: 'full',
    },
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
    args: { copy },
};


const Template = (args) => <Hero {...args} />;


export const Primary = Template.bind({});
Primary.args = {
    text:'test',
    image: 'hero.png',
    skinny: true
}