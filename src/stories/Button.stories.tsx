import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Button} from '../components/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/Button',
    component: Button,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    primary: true,
    label: 'Very important',
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Not so important',
};

export const Small = Template.bind({});
Small.args = {
    label: 'Smaller',
    size: 'small'
};

export const Large = Template.bind({});
Large.args = {
    label: 'Larger',
    size: 'large'
};

