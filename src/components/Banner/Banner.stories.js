import Banner from "./Banner";
import variables from '../../styles/variables.module.scss';
import Button from '../Button/Button';

export default {
    title: 'Components/Banner',
    component: Banner,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
};



export const DarkGrey = {
    render: () => {


        return (

            <Banner
                style={{ backgroundColor: variables.neutralDark, color: variables.white }}
                text={'Welcome to the Crawford County Historical Society and Museum. Experience the rich history of Grayling and Crawford County through dynamic exhibits, interactive programs, and engaging community events that bring local stories to life.'}
                cta={<Button variation='secondary'>Learn More</Button>}
            />


        )
    }

}