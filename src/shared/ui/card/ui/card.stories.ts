import type { Meta, StoryObj } from '@storybook/react-vite';

import { Card } from './card';

const meta = {
    title: 'Shared/Card',
    component: Card,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'карточка',
    },
};
