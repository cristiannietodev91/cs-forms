import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
	title: "CS Design System / Button",
	component: Button
};

export default meta;
type Story = StoryObj<typeof Button>;

export const AllButtons: Story = {
	render: () => <>
		<Button variant="primary" size="sm">Small</Button>
		<Button variant="primary" size="md">Medium</Button>
		<Button variant="primary" size="lg">Large</Button>
		<br />
		<Button variant="primary" size="sm" outline>Small</Button>
		<Button variant="primary" size="md" outline>Medium</Button>
		<Button variant="primary" size="lg" outline>Large</Button>
		<br />
		<Button variant="secondary" size="sm">Small</Button>
		<Button variant="secondary" size="md">Medium</Button>
		<Button variant="secondary" size="lg">Large</Button>
		<br />
		<Button variant="secondary" size="sm" outline>Small</Button>
		<Button variant="secondary" size="md" outline>Medium</Button>
		<Button variant="secondary" size="lg" outline>Large</Button>
		<br />
		<Button variant="success" size="sm">Small</Button>
		<Button variant="success" size="md">Medium</Button>
		<Button variant="success" size="lg">Large</Button>
		<br />
		<Button variant="success" size="sm" outline>Small</Button>
		<Button variant="success" size="md" outline>Medium</Button>
		<Button variant="success" size="lg" outline>Large</Button>
		<br />
		<Button variant="info" size="sm">Small</Button>
		<Button variant="info" size="md">Medium</Button>
		<Button variant="info" size="lg">Large</Button>
		<br />
		<Button variant="info" size="sm" outline>Small</Button>
		<Button variant="info" size="md" outline>Medium</Button>
		<Button variant="info" size="lg" outline>Large</Button>
		<br />
		<Button variant="warning" size="sm">Small</Button>
		<Button variant="warning" size="md">Medium</Button>
		<Button variant="warning" size="lg">Large</Button>
		<br />
		<Button variant="warning" size="sm" outline>Small</Button>
		<Button variant="warning" size="md" outline>Medium</Button>
		<Button variant="warning" size="lg" outline>Large</Button>
		<br />
		<Button variant="danger" size="sm">Small</Button>
		<Button variant="danger" size="md">Medium</Button>
		<Button variant="danger" size="lg">Large</Button>
		<br />
		<Button variant="danger" size="sm" outline>Small</Button>
		<Button variant="danger" size="md" outline>Medium</Button>
		<Button variant="danger" size="lg" outline>Large</Button>
	</>,
};

export const AllSizes: Story = {
	render: () => <>
		<Button variant="primary" size="sm">Small</Button>
		<br/>
		<br/>
		<Button variant="primary" size="md">Medium</Button>
		<br/>
		<br/>
		<Button variant="primary" size="lg">Large</Button>
	</>,
};

export const WithIcon: Story = {
	argTypes: {
		variant: {
			control: "inline-radio",
			options: ["primary", "secondary", "success", "warning", "info"]
		}
	},
	render: (args) => <Button {...args}><i className="fa fa-cloud"></i></Button>
};

export const TextWithIcon: Story = {
	argTypes: {
		variant: {
			control: "inline-radio",
			options: ["primary", "secondary", "success", "warning", "info"]
		}
	},
	render: (args) => <>
		<Button {...args}>Label <i className="fa fa-bars"></i></Button>
		<br />
		<Button {...args}><i className="fa fa-bars"></i> Label</Button>
	</>
};



