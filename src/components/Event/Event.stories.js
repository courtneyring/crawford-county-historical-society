
import Event from './Event';
import moment from 'moment'

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

        const start=moment().format('dddd, MMMM DD')

        return (
            // <div className='w-full'>
                <Event
                    name='Oak-toberfest'
                    image='https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    date={start}
                    startTime='3pm'
                    endTime='5pm'
                    description='The museum is funded through donations, sponsorships, and grants. Find out ways you can help the museum from day-to-day operations to long term success. The museum is funded through donations, sponsorships, and grants. F'
                    location='Crawford County Museum'
                />
            // </div>

        )
    }

}
