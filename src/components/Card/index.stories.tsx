import {ComponentStory, ComponentMeta} from "@storybook/react";
import {Card} from "./index";
import {Button} from "../Button/";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const CardDefault = () => <Card />;

export const CardActions = () => (
  <Card>
    <Button label="label" color="btn-primary" />
  </Card>
);
