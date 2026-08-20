import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./button";

const meta = {
    title: 'Shared/Button',
    component: Button,
    tags: ['autodocs'],
    parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        variant: 'primary',
        children: 'кнопка'
    }
}
export const Secondary: Story = {
    args: {
        variant: 'secondary',
        children: 'кнопка'
    }
}
export const Tertiary: Story = {
    args: {
        variant: 'tertiary',
        children: 'кнопка'
    }
}

export const Green: Story = {
    args: {
        variant: 'testGreen',
        children: 'кнопка тестовая'
    }
}