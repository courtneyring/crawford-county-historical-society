
import Navbar from './Navbar';




const links = [
    {
        "label": "Link1",
        "value": "/about"
    },
    {
        "label": "Link2",
        "value": "/board"
    },
    {
        "label": "Link3",
        "value": "/events"
    },
    {
        "label": "Link4",
        "value": "/exhibits"
    },
    {
        "label": "Link5",
        "value": "/support"
    },
    {
        "label": "Link6",
        "value": "/contact"
    }
]

export default {
    title: 'Components/Navbar',
    component: Navbar,
    parameters: {
        layout: 'fullscreen',
        backgrounds: { default: 'dark' },
    },
    tags: ['autodocs'],
};


export const Default = {
    parameters: {
        backgrounds: { default: 'dark' },
    }, 
    render: () =>{
        return (
            <div className='w-full p-2'>
                <Navbar links={links} title={"CCHS"} />
            </div>
        )
        
    }
};
