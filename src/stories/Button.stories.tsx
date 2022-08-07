import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Apply = Template.bind({});
Apply.args = {
  children: "応募する",
  color: "blue",
  size: "medium",
  disabled: false,
  onClick: () => alert("clicked!"),
};

export const Delete = Template.bind({});
Delete.args = {
  children: "削除する",
  color: "red",
  size: "small",
  disabled: false,
  onClick: () => alert("clicked!"),
};

export const DisabledDelete = Template.bind({});
DisabledDelete.args = {
  children: "削除する",
  color: "red",
  size: "small",
  disabled: true,
  onClick: () => alert("clicked!"),
};