import React from 'react';
import Footer from './Footer';
import { fn } from '@storybook/test';
// import copy from '@/../.storybook/assets/example-copy.json';


const promos = [
  {
    "header": "Crawford County History",
    "body": "Learn more about Crawford County through historical photographs and information.",
    "linkUrl": "/history",
    "linkLabel": "Explore the Past",
    "icon": "camera"
  },
  {
    "header": "Museum Exhibits",
    "body": "Crawford County through the ages including  AuSable River, Fish Hatchery, and the National Guard’s Camp Grayling.",
    "linkUrl": "/exhibits",
    "linkLabel": "Learn about our showcases",
    "icon": "calendar"
  },
  {
    "header": "Show Your Support",
    "body": "Find out ways you can help the museum from day-to-day operations to long term success.",
    "linkUrl": "/support",
    "linkLabel": "Help our museum",
    "icon": "groups"
  }
]

export default {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
  args: { promos },
};


const Template = (args) => <Footer promos={promos} />;


export const Primary = Template.bind({});
Primary.args = {promos}