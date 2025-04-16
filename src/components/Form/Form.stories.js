
import Form from './Form';
import { fn } from '@storybook/test';

export default {
    title: 'Components/Form',
    component: Form,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};



export const Primary = {
    render: () => {
        return (
            <div style={{width: '500px', height: '600px'}}>
                <Form onSubmit={fn} />
            </div>

        )
    }

}


