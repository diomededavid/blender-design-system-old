import {ComponentStory, ComponentMeta} from "@storybook/react";
import {Card} from "./index";
import {Button} from "../Button/";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Card",
  component: Card,
  argTypes: {
    title: {control: "string"},
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Card>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const CardDefault = () => (
  <Card title="title" description="description">
    <Button label="label" />
  </Card>
);
// More on args: https://storybook.js.org/docs/react/writing-stories/args
