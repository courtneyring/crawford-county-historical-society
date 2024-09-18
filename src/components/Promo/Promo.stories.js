
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


export const WithLink = {
    args: {
        icon: 'calendar',
        header: 'Header',
        body: 'It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more.',
        href: {value: 'http://google.com', label: 'Check out more'}
    },
};

export const WithoutLink = {
    args: {
        icon: 'calendar',
        header: 'Header',
        body: 'It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more.',
    },
};

export const WithImage = {
    args: {
        alignment: 'center',
        image: 'https://www.tenement.org/wp-content/uploads/2020/07/97Orchard_Exteriors-website-1_1584x1458_acf_cropped_1584x1458_acf_cropped.jpg',
        header: 'Header',
        body: 'It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more.',
        href: { value: 'http://google.com', label: 'Check out more' }
    },
}