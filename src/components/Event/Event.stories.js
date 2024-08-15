
import Event from './Event';



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
        return (
            <div className='w-full'>
                <Event title='Event One' date='Wed, Jan 1, 20257:30 PM  Fri, Jan 3, 20258:30 PM' description='It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.'/>
            </div>

        )
    }

}
