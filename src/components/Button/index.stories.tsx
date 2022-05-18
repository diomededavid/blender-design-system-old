import {ComponentStory, ComponentMeta} from "@storybook/react";

import {Button} from "./index";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: {control: "color"},
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Large = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Large.args = {
  size: "btn-lg",
  label: "Button",
};

export const Normal = Template.bind({});
Normal.args = {
  size: "btn",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "btn-sm",
  label: "Button",
};

export const Tiny = Template.bind({});
Tiny.args = {
  size: "btn-xs",
  label: "Button",
};
