import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
	title: "CS Design System / Button",
	component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
	render: () => <Button variant="primary">Label</Button>,
};

export const Secondary: Story = {
	render: () => <Button variant="secondary">Label</Button>,
};

export const AllSizes: Story = {
	render: () => <>
		<Button variant="primary" size="sm">Small</Button>
		<Button variant="primary" size="md">Medium</Button>
		<Button variant="primary" size="lg">Large</Button>
	</>,
};

