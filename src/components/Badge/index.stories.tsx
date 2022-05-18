import {ComponentStory, ComponentMeta} from "@storybook/react";

import {Badge} from "./index";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Badge",
  component: Badge,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: {control: "color"},
  },
} as ComponentMeta<typeof Badge>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const Large = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Large.args = {
  size: "badge-lg",
  label: "Badge",
};

export const Normal = Template.bind({});
Normal.args = {
  size: "badge-md",
  label: "Badge",
};

export const Small = Template.bind({});
Small.args = {
  size: "badge-sm",
  label: "Badge",
};

export const Tiny = Template.bind({});
Tiny.args = {
  size: "badge-xs",
  label: "Badge",
};
