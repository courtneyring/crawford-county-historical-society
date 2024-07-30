
import Promo from './Promo';


const copy = {
    "header": "Crawford County History",
    "body": "Learn more about Crawford County through historical photographs and information.",
    "linkUrl": "/history",
    "linkLabel": "Explore the Past",
    "icon": "camera"
}


export default {
    title: 'Components/Promo',
    component: Promo,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};


export const Primary = {
    args: {
        copy: copy
    },
};
