import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from './button';

const meta = {
    title: 'Shared/Button',
    component: Button,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        appearance: 'primary',
        children: 'кнопка',
    },
};
export const Secondary: Story = {
    args: {
        appearance: 'secondary',
        children: 'кнопка',
    },
};
export const Tertiary: Story = {
    args: {
        appearance: 'tertiary',
        children: 'кнопка',
    },
};
