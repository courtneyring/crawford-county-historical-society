
import Event from './Event';
import * as dayjs from 'dayjs'

export default {
    title: 'Components/Event',
    component: Event,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
};



export const Primary = {
    render: () => {

        const start=dayjs()

        return (
            <div className='w-full'>
                <Event
                    title='Example Event'
                    image='https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    start={start}
                    end={start}
                    description='Lorem ipsum'
                    location='Crawford County Museum'
                />
            </div>

        )
    }

}
