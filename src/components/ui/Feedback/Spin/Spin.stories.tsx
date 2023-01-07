import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Spin from './Spin';

export default {
    title: 'Spin',
    component: Spin,
} as ComponentMeta<typeof Spin>;


const Template: ComponentStory<typeof Spin> = (args) => <Spin />;

export const Primary = Template.bind({});
Primary.args = {

};
