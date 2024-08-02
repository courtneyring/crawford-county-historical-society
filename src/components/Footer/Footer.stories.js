import React from 'react';
import Footer from './Footer';
import { fn } from '@storybook/test';
// import copy from '@/../.storybook/assets/example-copy.json';


const promos = [
  {
    "header": "Contact Us",
    "body": "97 East Michigan Avenue<br>P.O. Bo 218<br>Grayling, MI 49738<br><br>989-745-3493",
  },
  {
    "header": "Hours",
    "body": "Tuesday to Saturday<br>10am - 4pm",
  },
  {
    "header": "Donate",
    "body": "Find out ways you can help the museum from day-to-day operations to long term success.",
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