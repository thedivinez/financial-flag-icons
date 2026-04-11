import './style.css';
import React from 'react';
import FinancialFlagIcon from '../src';
import { Meta, StoryFn } from '@storybook/react';

const meta: Meta = {
  title: 'Financial Flag Icon',
  component: FinancialFlagIcon,
  argTypes: {
    icon: {
      description: "Represents the ID of the target pair e.g eurusd",
      control: {
        type: 'text',
      },
    },
    className: {
      description: "Represents the CSS class used to style the component",
      control: {
        type: 'text',
      },
    },
    style: {
      description: "Represents the properties used to style the component directly without css",
      control: {
        type: 'object',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};
export default meta;

export interface Props { icon: string; className?: string; style?: React.CSSProperties };
const Template: StoryFn<Props> = args => <FinancialFlagIcon {...args} />;
export const Default = Template.bind({});

Default.args = { icon: "audcad", className: "h-2 w-2" };