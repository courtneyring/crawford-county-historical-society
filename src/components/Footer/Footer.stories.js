import React from 'react';
import Footer from './Footer';
import { fn } from '@storybook/test';
// import copy from '@/../.storybook/assets/example-copy.json';


const logoImg = '/assets/images/CourtneyRingLogo.png'
const links = [
  {label: 'About', value: '/about'},
  {label: 'Board', value: '/board'},
  {label: 'Events', value: '/events'},
  {label: 'Gallery', value: '/gallery'},
  {label: 'Contact', value: '/contact'}
]

const hours = [
  {label: 'Monday', value: '10am - 6pm'},
  {label: 'Tuesday', value: '10am - 6pm'},
  {label: 'Wednesday', value: 'Closed'},
  {label: 'Thursday', value: 'Closed'},
  {label: 'Friday', value: 'Closed'},
  {label: 'Saturday', value: 'Closed'},
  {label: 'Sunday', value: 'Closed'},
]

const address = {
  street: '97 East Michigan Avenue',
  street2: 'P.O.Box 218', 
  city: 'Grayling', 
  state: 'MI',
  zip: 49738
}

export default {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    layout: 'full',
  },
  tags: ['autodocs'],

};



export const Primary = {
  args: {
    logoImg,
    links,
    hours,
    address
  }

}