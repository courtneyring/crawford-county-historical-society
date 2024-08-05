import React from 'react';
import Footer from './Footer';
import { fn } from '@storybook/test';
// import copy from '@/../.storybook/assets/example-copy.json';


const promos = [
  {
    "type": "image-body",
    "body": "97 East Michigan Avenue<br>P.O. Box 218<br>Grayling, MI 49738<br><br>989-745-3493",
    "image": "/assets/images/CourtneyRingLogo.png"
  },
  {
    "type": "hours",
    "fields": [
      {key: 'Tuesday', value: '10am - 4pm'},
      {key: 'Wednesday', value: '10am - 4pm'},
      {key: 'Thursday', value: '10am - 4pm'},
      {key: 'Friday', value: '10am - 4pm'},
      {key: 'Saturday', value: '10am - 4pm'},
      {key: 'Sunday', value: 'Closed'},
      {key: 'Monday', value: 'Closed'},
    ]
  },
  {
    "type": "links",
    "links": [
      {label: 'Home', url: '/home'},
      {label: 'About', url: '/contact'},
      {label: 'Events', url: '/support'},
      {label: 'Support', url: '/home'},
      {label: 'Board', url: '/contact'},
      {label: 'Contact', url: '/support'},
    ] 
  }
]

export default {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    layout: 'full',
  },
  tags: ['autodocs'],
  args: { promos },
};


const Template = (args) => <Footer promos={promos} />;


export const Primary = Template.bind({});
Primary.args = {promos}