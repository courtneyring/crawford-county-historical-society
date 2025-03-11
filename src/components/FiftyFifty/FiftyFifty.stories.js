
import FiftyFifty from './FiftyFifty';
import variables from '../../styles/variables.module.scss';
import Button from '../Button/Button';
import { fn } from '@storybook/test';

export default {
    title: 'Components/FiftyFifty',
    component: FiftyFifty,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};



export const Default = {
    args: {
        heading: 'Museum Events',
        body: 'The museum is funded through donations, sponsorships, and grants. Find out ways you can help the museum from day-to-day operations to long term success',
        backgroundColor: variables.primary,
        color: variables.white,
        cta: <Button hollow={true} variation='white'>Click Here</Button>,
        image:'https://placehold.co/600x600/png'
    }

}


export const Reverse = {
    args: {
        heading: 'Museum Events',
        body: 'The museum is funded through donations, sponsorships, and grants. Find out ways you can help the museum from day-to-day operations to long term success',
        reverse: true,
        backgroundColor: variables.secondary,
        color: variables.neutralDark,
        cta: <Button hollow={true} variation='neutralDark'>Click Here</Button>,
        image: 'https://placehold.co/600x600/png'
    }

}