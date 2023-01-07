import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import List from './List';

export default {
    title: 'List',
    component: List,
} as ComponentMeta<typeof List>;


const Template: ComponentStory<typeof List> = (args) => <List {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: [{id: 1}, {id: 2}],
    renderItem: (item) => item.id
};
